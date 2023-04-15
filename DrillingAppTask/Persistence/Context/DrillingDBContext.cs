using DrillingAppTask.Persistence.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DrillingAppTask.Persistence.Context
{
    public class DrillingDBContext : DbContext
    {
        public DrillingDBContext(DbContextOptions<DrillingDBContext> options)
            : base(options)
        {
        }

        public DbSet<Events> Events { get; set; }
    }
}
