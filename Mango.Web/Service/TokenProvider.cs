using Mango.Web.Service.IService;
using Mango.Web.Utility;
using NuGet.Common;

namespace Mango.Web.Service
{
    public class TokenProvider : ITokenProvider
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public TokenProvider(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        public void ClearToken()
        {
            _httpContextAccessor.HttpContext?.Response.Cookies.Delete(SD.TokenCookies);
        }

        public string? GetToken()
        {
            string? token = null;
            bool? hasToken = _httpContextAccessor.HttpContext?.Request.Cookies.TryGetValue(SD.TokenCookies,out token);

            return hasToken is true ? token : null;

        }

        public void SetToken(string token)
        {
            _httpContextAccessor.HttpContext?.Response.Cookies.Append(SD.TokenCookies, token);
           
        }
    }
}
