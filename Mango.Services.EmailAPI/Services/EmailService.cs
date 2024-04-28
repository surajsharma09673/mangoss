using System.Text;
using Mango.Services.EmailAPI.Data;
using Mango.Services.EmailAPI.Models;
using Mango.Services.EmailAPI.Models.Dto;
using Mango.Services.EmailAPI.Services.IServices;
using Microsoft.EntityFrameworkCore;

namespace Mango.Services.EmailAPI.Services
{
    public class EmailService : IEmailService
    {
        private readonly DbContextOptions<AppDbContext> _dboptions;

        public EmailService(DbContextOptions<AppDbContext> dboptions)
        {
            _dboptions = dboptions;
        }

        public async Task EmailCartAndLog(CartDto cartDto)
        {
            StringBuilder message = new StringBuilder();
            message.AppendLine("<br/>Cart Email Requested");
            message.AppendLine($"<br/>Total {cartDto.CartHeader.CartTotal}");
            message.AppendLine("<br/>");
            message.AppendLine("<ul>");

            foreach (var item in cartDto.CartDetails)
            {
                message.AppendLine($"<li>{item.ProductDto.Name} x {item.Count}</li>");
            }

            message.AppendLine("</ul>");

            string email = cartDto.CartHeader.Email;
            try
            {
                var result = await LogAndEmail(message.ToString(), email);
                if (result == true) { }
                else
                {
                    throw new Exception("Sending Email Fail");
                }
            }
            catch (Exception ex)
            {
                // Handle the exception, possibly log it
                Console.WriteLine($"Error sending email: {ex.Message}");
            }
        }

        public async Task LogOrderPLace(RewardMessage rewardMessage)
        {
            string message = $"New Order Placed. <br/> Order Id: {rewardMessage.OrderId}";
            await LogAndEmail(message, "dotnetOrderplaceMastery@gmail.com");
        }

        public async Task RegisterUserEmailAndLog(string email)
        {
            string message = $"User Registration Successful. <br/> Email: {email}";

            try
            {
                await LogAndEmail(message, "dotnetmastery@gmail.com");
            }
            catch (Exception ex)
            {
                // Handle the exception, possibly log it
                Console.WriteLine($"Error logging user registration: {ex.Message}");
            }
        }

        private async Task<bool> LogAndEmail(string message, string email)
        {
            try
            {
                EmailLogger emailLog =
                    new()
                    {
                        Email = email,
                        EmailSent = DateTime.Now,
                        Message = message
                    };

                using var _db = new AppDbContext(_dboptions);
                _db.EmailLoggers.Add(emailLog);
                await _db.SaveChangesAsync();

                // Here you can add logic for sending the email using an email service

                return true;
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                Console.WriteLine($"Error logging and sending email: {ex.Message}");
                return false;
            }
        }
    }
}
