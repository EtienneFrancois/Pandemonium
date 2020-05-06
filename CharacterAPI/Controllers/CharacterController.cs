using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CharacterAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ILogger<CharacterController> _logger;

        public CharacterController(ILogger<CharacterController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public JsonResult Get()
        {
           return new JsonResult(CHARACTER_SERVICE.CharacterBusiness.getHeroList());
        }

        [HttpGet("{type}")]
        public JsonResult Get(string type)
        {   
            if(type == "monster"){return new JsonResult(CHARACTER_SERVICE.CharacterBusiness.getrandomMonster());}
            return null;
        }



    }
}