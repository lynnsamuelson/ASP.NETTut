using Microsoft.AspNet.Identity.EntityFramework;
using System;

namespace TheWorld.Models
{
    public class WorldUser : IdentityUser<string>
    {
        public DateTime FirstTrip { get; set; }
    }
}