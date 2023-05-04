import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Events } from '../Models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  constructor( private http: HttpClient ) { }
  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>('https://localhost:44313/Events/All')
  }
  addEvent(addEventRequest: Events): Observable<Events>{
    return this.http.post<Events>('https://localhost:44313/Events/Post', addEventRequest);
  }
  getEvent(id:any): Observable<Events>{
   return this.http.get<Events>('https://localhost:44313/Events/Event/'+ id)
  }
  updateEvent(id:any, updateEventRequest:Events):Observable<Events>{
    return this.http.put<Events>('https://localhost:44313/Events/Update', updateEventRequest);
  }
  deleteEvent(id:any):Observable<Events>{
    return this.http.delete<Events>('https://localhost:44313/Events/Delete' )
  }
}
