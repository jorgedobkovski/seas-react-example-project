using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet.API.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? CompletedAt { get; set; }
        public Priority? Priority { get; set; }

        public Item()
        {
            CreatedAt = DateTime.Now;
            CompletedAt = null;
        }
        public Item(int id, string name, string description) : this()
        {
            Id = id;
            Name = name;
            Description = description;
        }

        public void Concluir()
        {
            if (CompletedAt == null)            
                CompletedAt = DateTime.Now;            
            else            
                throw new InvalidOperationException($"Esse item já foi concluído em {CompletedAt}.");            
        }
    }
}