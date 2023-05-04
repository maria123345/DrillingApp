import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/Models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  eventDetails: Events={
    id: 0,
    eventTitle: '',
    start: 0,
    end: 0,
    backgroundColor: ''
  };
  constructor(private router:Router, private route:ActivatedRoute, private eventService: EventsService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const Id = params.get('id');
        if(Id){
          this.eventService.getEvent(Id).subscribe({
            next:(response)=>{
              this.eventDetails= response;
            }
          })
        }
      }
    })
    
  }
  updateEvent(){
    this.eventService.updateEvent(this.eventDetails.id, this.eventDetails).subscribe({
      next:(response)=>{
        this.router.navigate(['event']);
      }
    })
  }
  deleteEvent(id:any){
    this.eventService.deleteEvent(id).subscribe({
      next:(response)=>{
        this.router.navigate(['event']);
      }
    })
  }
}
