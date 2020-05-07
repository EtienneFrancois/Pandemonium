using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SpellAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpellController : ControllerBase
    {
        private readonly ILogger<SpellController> _logger;

        public SpellController(ILogger<SpellController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public JsonResult Get()
        {
           return null;
        }

        [HttpGet("{type}/{id}")]
        public JsonResult Get(string type, int id)
        {   
            if(type=="hero"){
                return new JsonResult(SPELL_SERVICE.SpellBusiness.getHeroSpellByID(id));
            }
            return null;
        }



    }
}