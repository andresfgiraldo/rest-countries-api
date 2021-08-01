import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/interfaces/country';
import { RestcountriesService } from 'src/app/services/restcountries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() country: Country;

  public countriesBorder: Country[] = [];

  constructor(
    private _api: RestcountriesService,
    private _router: Router
  ) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.loadBorders();
  }

  getCurrencies() {
    return this.country.currencies.reduce((str, cur) => str + cur.name + ', ', '').slice(0, -2);
  }

  getLanguages() {
    return this.country.languages.reduce((str, lang) => str + lang.name + ', ', '').slice(0, -2);
  }

  loadBorders() {
    if (this.country) {
      this.countriesBorder = [];
      this.country.borders.forEach(border => {
        this._api.getByCode(border)
          .subscribe(country => this.countriesBorder.push(country));
      });
    }
  }

  goToBorder(alpha3Code: string) {
    this._router.navigate(['/country', alpha3Code]);

    this._api.getByCode(alpha3Code)
      .subscribe(country => {
        this.country = country
        this.loadBorders();
      });
  }

  goToBack(): void {
    this._router.navigate(['/home']);
  }

}
