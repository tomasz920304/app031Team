using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    public class Team
    {
        public int TeamId { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
