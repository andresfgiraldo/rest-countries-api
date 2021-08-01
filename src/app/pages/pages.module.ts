import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';



@NgModule({
  declarations: [HomeComponent, CountryComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
