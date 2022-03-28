import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { MdbDropdownMenuDirective } from 'mdb-angular-ui-kit/dropdown';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addCar!:boolean;
  updateCar!:boolean;
  listCar!:boolean;
 

  constructor() { }

  ngOnInit(): void {
  }

  panelControlAddCar()
  {

    this.addCar=true
    //--//
    this.updateCar=false;
    this.listCar=false;
  }
  panelControlUpdateCar()
  {
    this.updateCar=true;
    //----//
    this.addCar=false;
    this.listCar=false;
  
  }

  panelControlListCar()
  {
    this.listCar=true;
    //----//
    this.addCar=false;
    this.updateCar=false;
  
  }


}
