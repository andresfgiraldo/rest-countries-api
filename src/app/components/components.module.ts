import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';
import { CountryResumeComponent } from './country-resume/country-resume.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';


@NgModule({
  declarations: [NavbarComponent, GridComponent, CountryResumeComponent, CountryDetailComponent],
  imports: [
    CommonModule
  ], exports: [
    NavbarComponent,
    GridComponent,
    CountryResumeComponent,
    CountryDetailComponent
  ]
})
export class ComponentsModule { }
