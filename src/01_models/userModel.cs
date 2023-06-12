namespace Models
{
    public class UserModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string? Phone { get; set; }
        public DateTime joinedOn { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public int Status { get; set; }
        public float Balance { get; set; }
    }
}
