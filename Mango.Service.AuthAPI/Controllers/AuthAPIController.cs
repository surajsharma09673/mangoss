using Mango.Service.AuthAPI.Models.Dto;
using Mango.Service.AuthAPI.Service.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mongo.Services.AuthAPI.Models.Dto;

namespace Mango.Service.AuthAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthAPIController : ControllerBase
    {
        private readonly IAuthService _authService;
        protected ResponseDto _responseDto;

        public AuthAPIController(IAuthService authService)
        {
            _authService = authService;
            _responseDto = new();
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistrationRequestDto model)
        {
            var errorMessage = await _authService.Register(model);
            if (!string.IsNullOrEmpty(errorMessage))
            {
                _responseDto.IsSuccess=false;
                _responseDto.Message = errorMessage;
                return BadRequest(errorMessage);
            }
            return Ok(_responseDto);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto model)
        {
            try
            {
                var loginResponse = await _authService.Login(model);
                if (loginResponse.User == null)
                {
                    _responseDto.IsSuccess = false;
                    _responseDto.Message = "UserName or password is incorrect";
                    return BadRequest(_responseDto);
                }
                else
                {
                    _responseDto.Result = loginResponse;
                    return Ok(_responseDto);
                }
            }
            catch (Exception ex) {
                _responseDto.IsSuccess = false;
                _responseDto.Message = "Error Encoutered";
                
            }

            return Ok(_responseDto);
        }

        [HttpPost("AssignRole")]
        public async Task<IActionResult> AssignRole([FromBody] RegistrationRequestDto model)
        {
            try
            {
                var assignRoleSuccessful = await _authService.AssignRole(model.Email,model.Role.ToUpper());
               
                if (!assignRoleSuccessful)
                {
                    _responseDto.IsSuccess = false;
                    _responseDto.Message = "Error Encountered";
                    return BadRequest(_responseDto);
                }
                return Ok(_responseDto);
            }
            catch (Exception ex)
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = "Error Encoutered";

            }

            return Ok(_responseDto);
        }
    }
}
