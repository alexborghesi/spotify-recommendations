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
        public async Task<ActionResult> Get([FromQuery] string[] ids)
        {
            var response = await _repo.GetRecommendation(ids);
            
            // No recommendation found
            if (response.Tracks != null && response.Tracks.Length == 0)
            {
                return NoContent();
            }
            return Ok(response); 
        }
    }
}