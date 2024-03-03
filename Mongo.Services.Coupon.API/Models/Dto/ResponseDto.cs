namespace Mongo.Services.AuthAPI.Models.Dto
{
    public class ResponseDto
    {
        public object? Result {  get; set; }
        public Boolean IsSuccess { get; set; } = true;
        public String Message { get; set; } = string.Empty;
    }
}
