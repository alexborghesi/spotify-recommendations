using Albo.SpotifyRecommendations.Api.Models;
using CodingAssignment.Spotify.ApiClient.Models;
using System.Threading.Tasks;

namespace CodingAssignment.Spotify.ApiClient.Repository
{
    public interface IRepo
    {
        Task<SearchArtistResponse> SearchArtist(string artistName, int? limit, int? offset);
        Task<Recommendation> GetRecommendation(string[] ids);

    }
}
