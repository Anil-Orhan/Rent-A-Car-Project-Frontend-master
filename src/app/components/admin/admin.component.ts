import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { MdbDropdownMenuDirective } from 'mdb-angular-ui-kit/dropdown';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

main:string="";
alt:string="";


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }




  panelControl(main:string,alt:string)
  {

    this.main=main;
    this.alt=alt;
  }

  

}
