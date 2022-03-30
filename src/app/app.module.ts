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
import { AddCarComponent } from './components/carCRUDs/add-car/add-car.component';

import { PayResultComponent } from './components/pay-result/pay-result.component';




import { AdminComponent } from './components/admin/admin.component';
import { UpdateCarComponent } from './components/carCRUDs/update-car/update-car.component';

import { ListCarComponent } from './components/carCRUDs/list-car/list-car.component';

import { AddBrandComponent } from './components/brandCRUDs/add-brand/add-brand.component';
import { UpdateBrandComponent } from './components/brandCRUDs/update-brand/update-brand.component';
import { ListBrandsComponent } from './components/brandCRUDs/list-brands/list-brands.component';
import { AddColorComponent } from './components/colorCRUDs/add-color/add-color.component';
import { UpdateColorComponent } from './components/colorCRUDs/update-color/update-color.component';
import { ListColorComponent } from './components/colorCRUDs/list-color/list-color.component'; // lib



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
    PayResultComponent,
    AdminComponent,
    UpdateCarComponent,
    ListCarComponent,
    AddBrandComponent,
    UpdateBrandComponent,
    ListBrandsComponent,
    AddColorComponent,
    UpdateColorComponent,
    ListColorComponent,
    
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
    ReactiveFormsModule,
   
    
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
