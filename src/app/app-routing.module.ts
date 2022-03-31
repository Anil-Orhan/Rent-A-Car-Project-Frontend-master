import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddCarComponent } from './components/carCRUDs/add-car/add-car.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { MainComponent } from './components/main/main.component';
import { PayResultComponent } from './components/pay-result/pay-result.component';
import { PayComponent } from './components/pay/pay.component';
import { UpdateCarComponent } from './components/carCRUDs/update-car/update-car.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandID', component: CarComponent },
  { path: 'cars/color/:colorID', component: CarComponent },
  { path: 'cars/price/:minPrice', component: CarComponent },
 
  { path: 'cars/detail/:carID', component: CardetailComponent },
  { path: 'cars/detail', component: CardetailComponent },
  { path: 'about', component: AboutComponent },
 
  { path: 'pay', component: PayComponent },
  { path: 'add', component: AddCarComponent },
  { path: 'update-car', component: UpdateCarComponent },
  { path: 'pay-result', component: PayResultComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
