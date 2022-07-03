using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string RetriveEmailFromClaimsPrincipal(this ClaimsPrincipal user) 
        {
            return user?.FindFirstValue(ClaimTypes.Email);
        }
    }
}
