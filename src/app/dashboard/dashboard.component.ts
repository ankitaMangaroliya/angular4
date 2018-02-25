import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  num:number;
  constructor() { }

  ngOnInit() {
  }

  sort(){
    let arr = this.num.toString().split(''); //for converting "54213" to ["5","4","2","1","3"]
    let nArray = arr.map(Number);//for converting ["5","4","2","1","3"] to [5,4,2,1,3]
    nArray = nArray.sort((a,b)=>{return b-a; }) //for converting  [5,4,2,1,3] to [5,4,3,2,1]
    this.num = +nArray.join(""); //for converting [5,4,3,2,1] to 54321
  }
}
