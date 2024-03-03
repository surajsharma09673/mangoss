using Microsoft.AspNetCore.Mvc;

namespace Mango.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
