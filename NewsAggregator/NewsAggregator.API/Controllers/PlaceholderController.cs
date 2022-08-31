using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewsAggregator.Services.Abstraction;

namespace NewsAggregator.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceholderController : ControllerBase
    {
        private readonly IPlaceholderService _placeholderService;

        public PlaceholderController(IPlaceholderService placeholderService)
        {
            _placeholderService = placeholderService;
        }
    }
}
