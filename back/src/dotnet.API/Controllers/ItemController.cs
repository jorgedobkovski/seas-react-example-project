using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet.API.Data;
using dotnet.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : ControllerBase
    {
        private readonly DataContext _context;

        public ItemController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _context.Items.ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> Get([FromRoute] int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound("Item not found");
            }
            return item;
        }

        [HttpPost]
        public async Task<ActionResult<Item>> Post(Item item)
        {
            _context.Items.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Item>> Put(int id, Item item)
        {
            if (id != item.Id)
            {
                return BadRequest("ID mismatch");
            }

            _context.Update(item);
            if (_context.SaveChanges() > 0)
            {
                return _context.Items.FirstOrDefault(i => i.Id == id);
            }
            else
            {
                return new Item();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Item>> Delete(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound("Item not found");
            }
            _context.Items.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}