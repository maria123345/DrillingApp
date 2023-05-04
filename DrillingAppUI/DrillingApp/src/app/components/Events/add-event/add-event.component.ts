import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/Models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  addEventRequest:Events={
    id: 0,
    eventTitle: '',
    start: 0,
    end: 0,
    backgroundColor: ''
  };

  constructor(private eventService: EventsService, private router: Router){}
  ngOnInit(): void{

  }
  addEvent(){
    this.eventService.addEvent(this.addEventRequest).subscribe({
      next: (addEventRequest)=>{
        this.router.navigate(['event']);
        console.log(addEventRequest)
      }
    })
    console.log(this.addEventRequest);
  }
}
