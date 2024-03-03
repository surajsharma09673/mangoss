using Mango.Service.AuthAPI.Models;
using Mango.Service.AuthAPI.Service.IService;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Mango.Service.AuthAPI.Service
{
    public class JwtTokenGenerator : IJwtTokenGenerator
    {
        private readonly JwtOption _jwtOption;

        public JwtTokenGenerator(IOptions<JwtOption> jwtOption)
        {
            _jwtOption = jwtOption.Value;
        }
        public string GenerateToken(ApplicationUser applicationUser,IEnumerable<string>roles)
        {
            var tokenHandle = new JwtSecurityTokenHandler();
            var Key =Encoding.ASCII.GetBytes(_jwtOption.Secret);

            var claimsList = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, applicationUser.Email),
                new Claim (JwtRegisteredClaimNames.Name,applicationUser.UserName),
                new Claim(JwtRegisteredClaimNames.Sub,applicationUser.Id),

            };
            claimsList.AddRange(roles.Select(roles=>new Claim(ClaimTypes.Role,roles)));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = _jwtOption.Audience,
                Issuer = _jwtOption.Issuer,
                Subject = new ClaimsIdentity(claimsList),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Key), SecurityAlgorithms.HmacSha256Signature),

            };
            var token = tokenHandle.CreateToken(tokenDescriptor);

            return tokenHandle.WriteToken(token);

        }
    }
}
