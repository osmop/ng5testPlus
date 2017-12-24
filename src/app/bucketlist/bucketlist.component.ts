import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bucketList',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.scss']
})
export class BucketlistComponent implements OnInit {

  backBtnText: string='Back to home';
  goals: any;
  itemCount: number;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    // subscription to data.service.ts
    this._data.goal.subscribe(res => this.goals=res);
    // counter update must be after service data subscription, because data is stored there
    this.itemCount=this.goals.length;
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
