import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

//import { NgFor } from '@angular/common/src/directives/ng_for_of';
//import { forEach } from '@angular/router/src/utils/collection';

//import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
//import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations/src/animation_metadata';
//import { animate } from '@angular/animations/src/animation_metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 /*
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform: 'translateY(-75%)', offset:0}),
            style({opacity:.5, transform: 'translateY(35px)', offset:.3}),
            style({opacity:1, transform: 'translateY(0)', offset:1}),
          ]))]), {optional:true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:1, transform: 'translateY(0)', offset:0}),
            style({opacity:.5, transform: 'translateY(35px)', offset:.3}),
            style({opacity:0, transform: 'translateY(-75%)', offset:1}),
          ]))]), {optional:true})
      ])
    ])

  ]
*/
})
export class HomeComponent implements OnInit {

  itemCount: number;
  submitBtnText: string='Submit the Item';
  goalText: string='My first life goal';
  //goals=['My first life goal','I want to climb a mountain','Go ice skiing'];
  goals=[];
  help=[];
  editing=[];

  constructor(private _data: DataService) { }  // subscription to data.service.ts

  ngOnInit() {

    // result from data.service.ts
    this._data.goal.subscribe(res => this.goals=res);
    // counter update must be after service data subscription, because data is stored there
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    //console.log(this.goalText);

    this.goals.push(this.goalText);
    //console.log(this.goals[2]);

    this.goalText='';
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }

  updateItem(i){
    //console.log(i);
    console.log('goals instance from home.components: ' + this.goals[i]);
    console.log('goals array from home.components: ' + this.goals);

    // this._data.updateGoal(this.goals[i], i, this.goals);

    // this._data.changeGoal(this.goals);
    // console.log('goals instance from home.components: ' + this.goals);
  }

  save(itemId){
    console.log('Save on %s was called', itemId);
    this.editing[itemId]=0;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}
