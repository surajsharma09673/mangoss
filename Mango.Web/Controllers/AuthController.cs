using Mango.Web.Models;
using Mango.Web.Service;
using Mango.Web.Service.IService;
using Mango.Web.Utility;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Mango.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ITokenProvider _tokenProvider;

        public AuthController(IAuthService authService, ITokenProvider tokenProvider)
        {
            _authService = authService;
            _tokenProvider = tokenProvider;
        }

        [HttpPost("AssignRole")]
        public async Task<IActionResult> CreateAssignRoleAsync(RegistrationRequestDto registrationRequestDto)
        {
            var testing = await _authService.RegisterAsync(registrationRequestDto);
            return Ok();
        }
        [HttpPost("Registration")]
        public async Task<IActionResult> Register(RegistrationRequestDto registrationRequestDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                ResponseDto responseDto = await _authService.RegisterAsync(registrationRequestDto);
                ResponseDto Assignrole;
                if (responseDto != null && responseDto.IsSuccess)
                {
                    if (string.IsNullOrEmpty(registrationRequestDto.Role))
                    {
                        registrationRequestDto.Role = SD.RoleCustomer;
                    }
                    else
                    {
                        Assignrole=await _authService.AssignRoleAsync(registrationRequestDto);
                        if (Assignrole != null && Assignrole.IsSuccess)
                        {
                            return Ok(responseDto);
                        }
                    }
                    return Ok(responseDto);
                }
                else
                {

                    return BadRequest(responseDto);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginRequestDto loginRequestDto)
        {
            try
            {
                ResponseDto responseDto = await _authService.LoginAsync(loginRequestDto);
                if (responseDto != null && responseDto.IsSuccess)
                {
                    LoginResponseDto loginResponseDto = JsonConvert.DeserializeObject<LoginResponseDto>(Convert.ToString(responseDto.Result));
                    responseDto.Result = loginResponseDto;
                    SignInUser(loginResponseDto);
                    _tokenProvider.SetToken(loginResponseDto.Token);
                    return Ok(responseDto);
                }
                else
                {
                    return BadRequest(responseDto.Message);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return BadRequest();

        }
        [HttpGet("Logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            _tokenProvider.ClearToken();
            ResponseDto responseDto = new();
            responseDto.IsSuccess = true;
            return Ok(responseDto);
        }

        private async Task SignInUser(LoginResponseDto loginResponseDto)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwt = handler.ReadJwtToken(loginResponseDto.Token);
            var Identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
            Identity.AddClaim(new Claim(JwtRegisteredClaimNames.Email,
                jwt.Claims.FirstOrDefault(u => u.Type == JwtRegisteredClaimNames.Email).Value));
            Identity.AddClaim(new Claim(JwtRegisteredClaimNames.Sub,
                jwt.Claims.FirstOrDefault(u => u.Type == JwtRegisteredClaimNames.Sub).Value));
            Identity.AddClaim(new Claim(JwtRegisteredClaimNames.Name,
                jwt.Claims.FirstOrDefault(u => u.Type == JwtRegisteredClaimNames.Name).Value));

            Identity.AddClaim(new Claim(ClaimTypes.Name,
                jwt.Claims.FirstOrDefault(u => u.Type == JwtRegisteredClaimNames.Email).Value));

            Identity.AddClaim(new Claim(ClaimTypes.Role,
            jwt.Claims.FirstOrDefault(u => u.Type == "role").Value));

            var principle = new ClaimsPrincipal(Identity);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principle);
        }
    }
}
