import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    //children: []
  },
  {
    path: 'bucketlist/:id',
    component: BucketlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
