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
            var response = _repo.GetRecommendation(ids);
            
            // No recommendation found
            if (response.Result.Tracks != null && response.Result.Tracks.Length == 0)
            {
                return NoContent();
            }
            return Ok(response); 
        }
    }
}