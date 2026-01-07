namespace Backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string PodName { get; set; } = string.Empty;
        public string DomainName { get; set; } = string.Empty;
    }
}
