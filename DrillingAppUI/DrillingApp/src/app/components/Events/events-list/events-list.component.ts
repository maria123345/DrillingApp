import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/Models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:Events[]=[];
  constructor(private eventService: EventsService){}
  
  ngOnInit():void{
    this.eventService.getAllEvents().subscribe({
      next:(events)=>{
        this.events=events;
        console.log(events)
      },
      error: (response)=>{
        console.log(response)
      }
    })
  }

}
