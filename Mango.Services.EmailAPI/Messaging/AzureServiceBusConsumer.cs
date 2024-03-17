using System.Text;
using Azure.Messaging.ServiceBus;
using Mango.Services.EmailAPI.Models;
using Mango.Services.EmailAPI.Models.Dto;
using Mango.Services.EmailAPI.Services;
using Mango.Services.EmailAPI.Services.IServices;
using Newtonsoft.Json;

namespace Mango.Services.EmailAPI.Messaging
{
    public class AzureServiceBusConsumer : IAzureServiceBusConsumer
    {
        private readonly EmailService _emailService;
        private readonly string ServiceBusConnectionString;
        private readonly string EmailCartQueue;
        private readonly string registerUserQueue;
        private readonly IConfiguration _configuration;
        private ServiceBusProcessor _EmailCartProcessor;
        private ServiceBusProcessor _registerUserProcessor;
        private ServiceBusProcessor _EmailOrderPlaceProcessor;
        private readonly string orderCreated_Topic;
        private readonly string orderCreated_Email_Subscription;

        public AzureServiceBusConsumer(IConfiguration configuration, EmailService emailService)
        {
            _emailService = emailService;
            _configuration = configuration;
            ServiceBusConnectionString = _configuration.GetValue<string>(
                "ServiceBusConnectionString"
            );
            EmailCartQueue = _configuration.GetValue<string>(
                "TopicAndQueueNames:EmailshoppingcartQueue"
            );
            registerUserQueue = _configuration.GetValue<string>(
                "TopicAndQueueNames:RegisterUserQueue"
            );

            orderCreated_Topic = _configuration.GetValue<string>(
                "TopicAndQueueNames:OrderCreatedTopic"
            );
            orderCreated_Email_Subscription = _configuration.GetValue<string>(
                "TopicAndQueueNames:OrderCreated_Email_Subcription"
            );

            var client = new ServiceBusClient(ServiceBusConnectionString);
            _EmailCartProcessor = client.CreateProcessor(EmailCartQueue);
            _registerUserProcessor = client.CreateProcessor(registerUserQueue);
            _EmailOrderPlaceProcessor = client.CreateProcessor(
                orderCreated_Topic,
                orderCreated_Email_Subscription
            );
        }

        public async Task Start()
        {
            _EmailCartProcessor.ProcessMessageAsync += OnEmailCartRequestRecieved;
            _EmailCartProcessor.ProcessErrorAsync += ErrorHandler;
            await _EmailCartProcessor.StartProcessingAsync();

            _registerUserProcessor.ProcessMessageAsync += OnUserRegisterRequestRecieved;
            _registerUserProcessor.ProcessErrorAsync += ErrorHandler;
            await _registerUserProcessor.StartProcessingAsync();

            _EmailOrderPlaceProcessor.ProcessMessageAsync += EmailOrderPlaceRequestRecieved;
            _EmailOrderPlaceProcessor.ProcessErrorAsync += ErrorHandler;
            await _EmailOrderPlaceProcessor.StartProcessingAsync();
        }

        private async Task EmailOrderPlaceRequestRecieved(ProcessMessageEventArgs args)
        {
            var message = args.Message;
            var body = Encoding.UTF8.GetString(message.Body);
            RewardMessage objmessage = JsonConvert.DeserializeObject<RewardMessage>(body);
            try
            {
                await _emailService.LogOrderPLace(objmessage);
                await args.CompleteMessageAsync(args.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }

        private async Task OnUserRegisterRequestRecieved(ProcessMessageEventArgs args)
        {
            var message = args.Message;
            var body = Encoding.UTF8.GetString(message.Body);
            string UserEmail = JsonConvert.DeserializeObject<string>(body);
            try
            {
                await _emailService.RegisterUserEmailAndLog(UserEmail);
                await args.CompleteMessageAsync(args.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }

        public async Task Stop()
        {
            await _EmailCartProcessor.StopProcessingAsync();
            await _EmailCartProcessor.DisposeAsync();

            await _registerUserProcessor.StopProcessingAsync();
            await _registerUserProcessor.DisposeAsync();

            await _EmailOrderPlaceProcessor.StopProcessingAsync();
            await _EmailOrderPlaceProcessor.DisposeAsync();
        }

        private Task ErrorHandler(ProcessErrorEventArgs args)
        {
            Console.WriteLine(args.Exception.ToString());
            return Task.CompletedTask;
        }

        private async Task OnEmailCartRequestRecieved(ProcessMessageEventArgs args)
        {
            var message = args.Message;
            var body = Encoding.UTF8.GetString(message.Body);
            CartDto objmessage = JsonConvert.DeserializeObject<CartDto>(body);
            try
            {
                await _emailService.EmailCartAndLog(objmessage);
                await args.CompleteMessageAsync(args.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }
    }
}
