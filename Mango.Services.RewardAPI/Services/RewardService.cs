using System.Text;
using Mango.Services.RewardAPI.Data;
using Mango.Services.RewardAPI.Message;
using Mango.Services.RewardAPI.Models;
using Mango.Services.RewardAPI.Services.IServices;
using Microsoft.EntityFrameworkCore;

namespace Mango.Services.RewardAPI.Services
{
    public class RewardService : IRewardService
    {
        private readonly DbContextOptions<AppDbContext> _dboptions;

        public RewardService(DbContextOptions<AppDbContext> dboptions)
        {
            _dboptions = dboptions;
        }

        public async Task<bool> RewardExists(int orderId)
        {
            using var _db = new AppDbContext(_dboptions);

            return await _db.Rewards.AnyAsync(r => r.orderId == orderId);
        }

        public async Task UpdateRewards(RewardMessage rewardMessage)
        {
            try
            {
                Rewards rewards =
                    new()
                    {
                        orderId = rewardMessage.OrderId,
                        RewardsActivity = rewardMessage.RewardActivity,
                        RewardDate = DateTime.Now,
                        UserId = rewardMessage.UserId,
                    };

                using var _db = new AppDbContext(_dboptions);
                _db.Rewards.Add(rewards);
                await _db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                Console.WriteLine($"Error logging and sending email: {ex.Message}");
            }
        }
    }
}
