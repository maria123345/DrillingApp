import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/Events/add-event/add-event.component';
import { EditEventComponent } from './components/Events/edit-event/edit-event.component';
import { EventsListComponent } from './components/Events/events-list/events-list.component';

const routes: Routes = [
  {
    path:'',
    component:EventsListComponent
  },
  {
    path:'event',
    component:EventsListComponent
  },
  {
    path:'Events/Post',
    component:AddEventComponent
  },
  {
    path:'Events/Event/:id',
    component:EditEventComponent
  },
  {
    path:'Events/Delete',
    component:EditEventComponent
  },

  // {
  //   path:'Events/Update/:id',
  //   component:EditEventComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
