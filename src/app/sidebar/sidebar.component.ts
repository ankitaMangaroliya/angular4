import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showUI:boolean=false;

  constructor() { }

  ngOnInit() {
  }


  toggleMenu(){
    this.showUI = !this.showUI;
  }

}
