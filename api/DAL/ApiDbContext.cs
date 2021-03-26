using api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DAL
{
    public class ApiDbContext : DbContext
    {
        public DbSet<Team> Teams { get; set; }

        public ApiDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
