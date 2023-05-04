using DrillingAppTask.Persistence.Context;
using DrillingAppTask.Persistence.Models;
using DrillingAppTask.DTOS.Events;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DrillingAppTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly DrillingDBContext _context;


        public EventsController(DrillingDBContext context)
        {
            _context = context;
        }

        // GET:  
        [HttpGet("All")]
        public async Task<ActionResult<IEnumerable<Events>>> GetItems()
        {
            return await _context.Events.Select(x => new Events
            {
                ID = x.ID,
                End = x.End,
                Start = x.Start,
                EventTitle = x.EventTitle,
                BackgroundColor = x.BackgroundColor,


            }).ToListAsync();
        }

        // GET:  
        [HttpGet("Chart")]
        public async Task<ActionResult<IEnumerable<BarchartDataDTO>>> GetChart()
        {

            var response = await
                _context.Events.Select(e => new BarchartDataDTO
                {
                    Label = e.EventTitle,
                    Stack = "a",
                    Data = new List<long>() { e.End - e.Start },
                    BackgroundColor = new List<string>() { e.BackgroundColor == null ? "" : e.BackgroundColor }

                }).ToListAsync();

            return response;

        }



        // GET:  
        [HttpGet("Event/{id}")]
        public async Task<ActionResult<EventRequestDTO>> GetItem(int id)
        {
            var item = _context.Events.Where(x => x.ID == id).
                Select(x => new EventRequestDTO
                {
                    ID = x.ID,
                    End = x.End,
                    Start = x.Start,
                    EventTitle = x.EventTitle,


                }).FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // POST:  
        [HttpPost("Post")]
        public async Task<bool> PostItem(Events request)
        {
            var entity = new Events
            {
                //ID = request.ID,
                EventTitle = request.EventTitle,
                End = request.End,
                Start = request.Start,
                BackgroundColor = request.BackgroundColor
            };
            _context.Events.Add(entity);
            try
            {
                await _context.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }



        // PUT:  
        [HttpPut("Update")]
        public async Task<bool> PutItem(Events request)
        {
            var entity = _context.Events.FirstOrDefault(x => x.ID == request.ID);

            if (entity != null)
            {
                entity.ID = request.ID;
                entity.EventTitle = request.EventTitle;
                entity.End = request.End;
                entity.Start = request.Start;
                entity.BackgroundColor = request.BackgroundColor;
                _context.Events.Update(entity);
                try
                {
                    await _context.SaveChangesAsync();

                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }

            else
            {
                return false;
            }
        }

        

    }
}
