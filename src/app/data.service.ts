import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private goals= new BehaviorSubject<any>(['Initial by default goal']);
  goal= this.goals.asObservable();
  updatedGoal: string='';

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

  updateGoal(goal, index, goals){
    console.log('old goal string from dataService: ' + goal);
    console.log('old goal string from dataService [WITH INDEX]: ' + goals[index]);
    console.log('old goals array OBJECT from dataService: ' + this.goals);
    console.log('old goals array from dataService: ' + goals);

  //   // this.goals[index] = this.goals[index] + goal
  //   this.goals.subscribe(resp => {
  //     // update goals array
  //     //this.goals= this.updatedGoal.valueOf[i];
  //   goals = goals + '  Added goal: ' + goal;
  //     // this.goals.next(this.goals);
  //   }
  // )

    console.log('new goals array from dataService: ' + goals);

  }
}

/*
get data() {
  // get the latest value from _data BehaviorSubject
  return this._data.getValue();
}
*/
