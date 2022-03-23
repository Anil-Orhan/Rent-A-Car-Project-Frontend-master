import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarimageComponent } from './components/carimage/carimage.component';
import { AboutComponent } from './components/about/about.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterspanelComponent } from './components/filterspanel/filterspanel.component';
import { MainComponent } from './components/main/main.component';
import { PayComponent } from './components/pay/pay.component';

import { ToastrModule } from 'ngx-toastr';
import { AddCarComponent } from './components/add-car/add-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    CustomerComponent,
    ColorComponent,
    NaviComponent,
    RentalComponent,
    FooterComponent,
    CardetailComponent,
    DatepickerComponent,
    CarimageComponent,
    AboutComponent,
    FilterPipe,
    FilterspanelComponent,
    MainComponent,
    PayComponent,
    AddCarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}