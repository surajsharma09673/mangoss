namespace Mango.Services.RewardAPI.Models
{
    public class Rewards
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime RewardDate { get; set; }
        public int RewardsActivity { get; set; }
        public int orderId { get; set; }
    }
}
