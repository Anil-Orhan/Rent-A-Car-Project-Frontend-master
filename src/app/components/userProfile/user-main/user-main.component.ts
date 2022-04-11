import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor() { }
  key:string="profile";

  ngOnInit(): void {
  }


  setKey(key:string){

    this.key=key;
  }

  checkMenuItemIsActive(key:string)
  {
    if(key===this.key){return "list-group-item list-group-item-action active"}

    else{return "list-group-item list-group-item-action "}

  }
}
