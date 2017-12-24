import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BucketlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    //BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
