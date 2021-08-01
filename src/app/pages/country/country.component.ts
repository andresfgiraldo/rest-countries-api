import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country';
import { RestcountriesService } from 'src/app/services/restcountries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public country: Country;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _api: RestcountriesService
  ) { }

  ngOnInit(): void {
    let alpha3 = this._activateRoute.snapshot.params.id;
    console.log(alpha3);
    this._api.getByCode(alpha3).subscribe(
      country => this.country = country,
      error => console.log(error)
    );
  }
}
