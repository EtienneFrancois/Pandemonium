using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace StatsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StatsController : ControllerBase
    {
        private readonly ILogger<StatsController> _logger;

        public StatsController(ILogger<StatsController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{value}")]
        public JsonResult GetWithValue(int value)
        {     
            return new JsonResult(STATS_SERVICE.StatsBusiness.divideStats(value));  
        }

    }
}
