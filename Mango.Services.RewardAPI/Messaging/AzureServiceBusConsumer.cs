using System.Text;
using Azure.Messaging.ServiceBus;
using Mango.Services.RewardAPI.Message;
using Mango.Services.RewardAPI.Services;
using Newtonsoft.Json;

namespace Mango.Services.RewardAPI.Messaging
{
    public class AzureServiceBusConsumer : IAzureServiceBusConsumer
    {
        private readonly RewardService _rewardService;
        private readonly string ServiceBusConnectionString;
        private readonly string OrderCreatedRewardSubcription;
        private readonly string OrderCreatedTopic;
        private readonly IConfiguration _configuration;
        private ServiceBusProcessor _RewardProcessor;

        public AzureServiceBusConsumer(IConfiguration configuration, RewardService rewardService)
        {
            _rewardService = rewardService;
            _configuration = configuration;
            ServiceBusConnectionString = _configuration.GetValue<string>(
                "ServiceBusConnectionString"
            );
            OrderCreatedTopic = _configuration.GetValue<string>(
                "TopicAndQueueNames:OrderCreatedTopic"
            );
            OrderCreatedRewardSubcription = _configuration.GetValue<string>(
                "TopicAndQueueNames:OrderCreated_Reward_Subcription"
            );

            var client = new ServiceBusClient(ServiceBusConnectionString);
            _RewardProcessor = client.CreateProcessor(
                OrderCreatedTopic,
                OrderCreatedRewardSubcription
            );
        }

        public async Task Start()
        {
            _RewardProcessor.ProcessMessageAsync += OnRewardCartRequestRecieved;
            _RewardProcessor.ProcessErrorAsync += ErrorHandler;
            await _RewardProcessor.StartProcessingAsync();
        }

        public async Task Stop()
        {
            await _RewardProcessor.StopProcessingAsync();
            await _RewardProcessor.DisposeAsync();
        }

        private Task ErrorHandler(ProcessErrorEventArgs args)
        {
            Console.WriteLine(args.Exception.ToString());
            return Task.CompletedTask;
        }

        private async Task OnRewardCartRequestRecieved(ProcessMessageEventArgs args)
        {
            var message = args.Message;
            var body = Encoding.UTF8.GetString(message.Body);
            RewardMessage objmessage = JsonConvert.DeserializeObject<RewardMessage>(body);
            try
            {
                bool rewardExists = await _rewardService.RewardExists(objmessage.OrderId);
                if (!rewardExists)
                    await _rewardService.UpdateRewards(objmessage);
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
