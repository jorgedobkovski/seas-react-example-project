using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet.API.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Item> Items { get; set; }
    }
}