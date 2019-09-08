using Albo.SpotifyRecommendations.Api.Models;
using CodingAssignment.Spotify.ApiClient.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Albo.SpotifyRecommendations.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecommendationsController : ControllerBase
    {
        private readonly IRepo _repo;
        public RecommendationsController(IRepo repo)
        {
            _repo = repo; 
        }

        [HttpGet()]
        public ActionResult<Task<Recommendation>> Get([FromQuery] string[] ids)
        {
            return _repo.GetRecommendation(ids); 
        }
    }
}