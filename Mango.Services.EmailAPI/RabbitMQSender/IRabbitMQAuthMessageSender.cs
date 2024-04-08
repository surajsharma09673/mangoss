namespace Mango.Services.EmailAPI.RabbitMQSender
{
    public interface IRabbitMQAuthMessageSender
    {
        void SendMessage(object message, string queueName);
    }
}
