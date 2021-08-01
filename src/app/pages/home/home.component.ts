import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { RestcountriesService } from 'src/app/services/restcountries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public countries: Country[] = [];
  public selectedDevice: string = "All";

  constructor(private _api: RestcountriesService) { }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid(config?: { type: string, value: string }): void {
    console.log("conf", config)

    if (config === undefined || config == null ||
      (config.type == "region" && config.value == "All") ||
      (config.type == "name" && (config.value == "") || config.value == null)
    ) {
      this._api.getAll().subscribe(
        countries => this.countries = countries,
        error => console.log(error)
      );
    } else if (config.type == "region") {
      this._api.getByRegion(config.value).subscribe(
        countries => this.countries = countries,
        error => console.log(error)
      );
    } else if (config.type == "name") {
      this._api.getByName(config.value).subscribe(
        countries => this.countries = countries,
        error => console.log(error)
      );
    }
  }

  onRegionChange(region: string) {
    this.loadGrid({ type: "region", value: region });
  }

  onSearchChange(searchValue: string): void {
    this.loadGrid({ type: "name", value: searchValue });
  }

}


