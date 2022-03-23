import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { PayService } from 'src/app/services/pay.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  result: string = '';
  currentRent: Rental[] = [];

  constructor(
    private payService: PayService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  Pay() {
    let result = this.payService.Pay().subscribe((response) => {
      this.currentRent = response.data;
      this.toastrService.success(response.message);
    });
  }
}
