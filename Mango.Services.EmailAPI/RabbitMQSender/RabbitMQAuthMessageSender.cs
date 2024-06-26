﻿using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace Mango.Services.EmailAPI.RabbitMQSender
{
    public class RabbitMQAuthMessageSender : IRabbitMQAuthMessageSender
    {
        private readonly string _hostName;
        private readonly string _username;
        private readonly string _password;
        private IConnection _connection;

        public RabbitMQAuthMessageSender()
        {
            _hostName = "localhost";
            _password = "guest";
            _username = "guest";
        }

        public async void SendMessage(object message, string exchangeName)
        {
            if (ConnectionExists())
            {
                using var channel = _connection.CreateModel();
                channel.ExchangeDeclare(exchangeName, ExchangeType.Fanout, durable: false);
                var json = JsonConvert.SerializeObject(message);
                var body = Encoding.UTF8.GetBytes(json);
                channel.BasicPublish(exchange: exchangeName, "", null, body: body);
            }
        }

        private void CreateConnection()
        {
            try
            {
                var factory = new ConnectionFactory
                {
                    HostName = _hostName,
                    Password = _password,
                    UserName = _username,
                };
                _connection = factory.CreateConnection();
            }
            catch (Exception ex) { }
        }

        private bool ConnectionExists()
        {
            if (_connection == null)
                CreateConnection();
            return true;
        }
    }
}
