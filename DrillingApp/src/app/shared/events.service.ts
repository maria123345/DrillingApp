import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from './events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private myhttp:HttpClient) { }
  EventsUrl:string='https://localhost:44372/controller/Events';
  listEvents:Events[]=[]; //For Getting Data EventseList
  EventsData:Events=new Events(); //for post data / Insert data
  saveEvents()
  {
    return this.myhttp.post(this.EventsUrl,this.EventsData);
  }
  updateEvents()
  {
    return this.myhttp.put(`${this.EventsUrl}/${this.EventsData.id}` ,this.EventsData);
  }
  getEvents():Observable<Events[]>
  {
    return this.myhttp.get<Events[]>(this.EventsUrl);
  }
 
  deleteEvents(id:number)
  {
    return this.myhttp.delete(`${this.EventsUrl}/${id}`);
  }

}
