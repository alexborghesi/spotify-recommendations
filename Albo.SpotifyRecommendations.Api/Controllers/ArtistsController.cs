using CodingAssignment.Spotify.ApiClient.Repository;
using System.Threading.Tasks;
using CodingAssignment.Spotify.ApiClient.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Albo.SpotifyRecommendations.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly IRepo _repo; 
        public ArtistsController(IRepo repo)
        {
            _repo = repo; 
        }

        [HttpGet("{name}")]
        public async Task<ActionResult> Get(string name)
        {
            var response = await _repo.SearchArtist(name);  

           // No artist found
           if(response.Artists.Items != null && response.Artists.Items.Count == 0)
            {
                return NoContent();
            }

            return Ok(response); 
        }
    }
}
