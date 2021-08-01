import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-country-resume',
  templateUrl: './country-resume.component.html',
  styleUrls: ['./country-resume.component.css']
})
export class CountryResumeComponent implements OnInit {

  @Input() country: Country;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  
  }

  detail(): void {
    this._router.navigate(['/country', this.country.alpha3Code]);
  }

  

}
