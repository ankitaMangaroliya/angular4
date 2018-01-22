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
    console.log("sort no ",this.num,this.num.toString().length);
    let len=this.num.toString().length;
    var arr = this.num.toString().split('') ;
    console.log("arr",arr);
    for(let i=0;i<len-1;i++){
      for(let j=i+1;j<len;j++){
        if(parseInt(arr[i])<parseInt(arr[j])){
          let c = arr[i];
          arr[i] = arr[j];
          arr[j] = c;
        }
      }
    }
    console.log("sorted array",arr);
    let n =0,l=len-1;
    var b = arr.map( s=>{
      console.log("nnnnn",10^l);
      n = n+ parseInt(s)*(10^l);
      console.log("n",n,s);
      return parseInt(s,10);
    })
    console.log("resul",b);
    console.log("n",n);
  }

}
