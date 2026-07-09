using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace dotnet.API.Data.Mappings
{
    public class ItemMap : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("Items");

            builder.Property(i => i.Name)
                .HasColumnType("varchar(100)");

                builder.Property(i => i.Description)
                .HasColumnType("varchar(255)");
        }
    }
}