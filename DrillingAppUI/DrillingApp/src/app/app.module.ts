import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './components/Events/events-list/events-list.component';
import { AddEventComponent } from './components/Events/add-event/add-event.component';
import { FormsModule } from '@angular/forms';
import { EditEventComponent } from './components/Events/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
