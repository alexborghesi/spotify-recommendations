using Albo.SpotifyRecommendations.Api.Models;
using CodingAssignment.Spotify.ApiClient.Models;
using System.Threading.Tasks;

namespace CodingAssignment.Spotify.ApiClient.Repository
{
    public interface IRepo
    {
        Task<SearchArtistResponse> SearchArtist(string artistName);
        Task<Recommendation> GetRecommendation(string[] ids);

    }
}
