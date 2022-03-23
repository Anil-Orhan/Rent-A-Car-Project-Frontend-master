import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayService } from 'src/app/services/pay.service';

@Component({
  selector: 'app-pay-result',
  templateUrl: './pay-result.component.html',
  styleUrls: ['./pay-result.component.css']
})
export class PayResultComponent implements OnInit {


  constructor(private payService:PayService,) { }
  results!:boolean;
  ngOnInit(): void {

    
  }

  checkResult(result:boolean)
  {
    console.log("result: " +result)

    this.results=result
    console.log("results: "+this.results)
  }
  }




