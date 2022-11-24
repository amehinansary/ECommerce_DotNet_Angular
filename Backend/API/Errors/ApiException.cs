using Newtonsoft.Json;

namespace API.Errors
{
  public class ApiException : ApiResponse
  {
    public ApiException(int statusCode, string message = null, string details = null)
        : base(statusCode, message)
    {
      Details = details;
    }
    [JsonProperty(Order = 1)]
    public string Details { get; set; }
  }
}