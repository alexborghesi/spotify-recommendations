using CodingAssignment.Spotify.ApiClient.Repository;
using System.Threading.Tasks;
using CodingAssignment.Spotify.ApiClient.Models;
using Microsoft.AspNetCore.Mvc;

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
        public ActionResult<Task<SearchArtistResponse>> Get(string name)
        {
           var response = _repo.SearchArtist(name); 

           // No artist found
           if(response.Result.Artists.Items != null && response.Result.Artists.Items.Count == 0)
            {
                return NoContent();
            }

            return Ok(response); 
        }
    }
}
