import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../shared/events.service';
import { Events } from '../shared/events.model';
import { EventsFormComponent } from './events-form/events-form.component';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit{

  constructor(public empService:EventsService, public datepipe:DatePipe, public toast:ToastrService) { }
  @ViewChild(EventsFormComponent) emp:EventsFormComponent | undefined;
  ngOnInit() {
    this.empService.getEvents().subscribe(data=>{
      this.empService.listEvents=data;
    });
  }
  populateEvents(selecetedEvents:Events)
  {
    let df=this.datepipe.transform(selecetedEvents.Start,'yyyy-MM-dd');
    selecetedEvents.Start=df;
    this.empService.EventsData=selecetedEvents;
    
  
  }
  delete(id:number)
  {
    if(confirm('Are you really want to delete this record?'))
    {
      this.empService.deleteEvents(id).subscribe(data=> {
        this.empService.getEvents().subscribe(data=>{
          this.empService.listEvents=data;
          this.toast.error('Sucess','Record Deleted');
        });
      },
      err=>{
      });
    }
  }

}
