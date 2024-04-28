using Mango.Services.EmailAPI.Models;
using Mango.Services.EmailAPI.Models.Dto;

namespace Mango.Services.EmailAPI.Services.IServices
{
    public interface IEmailService
    {
        Task EmailCartAndLog(CartDto cartDto);
        Task RegisterUserEmailAndLog(string email);
        Task LogOrderPLace(RewardMessage rewardMessage);
    }
}
