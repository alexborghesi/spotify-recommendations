using Albo.SpotifyRecommendations.Api.Models;
using Microsoft.AspNetCore.Mvc;
using CodingAssignment.Spotify.ApiClient.Repository;
using System.Threading.Tasks;
using CodingAssignment.Spotify.ApiClient.Models;

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

            return _repo.SearchArtist(name); 
        }
    }
}
