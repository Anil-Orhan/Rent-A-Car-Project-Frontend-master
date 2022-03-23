import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { MainComponent } from './components/main/main.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandID', component: CarComponent },
  { path: 'cars/color/:colorID', component: CarComponent },
  { path: 'cars/detail/:carID', component: CardetailComponent },
  { path: 'cars/detail', component: CardetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'car', component: CarComponent },
  { path: 'pay', component: PayComponent },
  { path: 'add', component: AddCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
