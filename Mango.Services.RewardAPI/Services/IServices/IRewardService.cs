using Mango.Services.RewardAPI.Message;

namespace Mango.Services.RewardAPI.Services.IServices
{
    public interface IRewardService
    {
        Task UpdateRewards(RewardMessage rewardMessage);
        Task<bool> RewardExists(int orderId);
    }
}
