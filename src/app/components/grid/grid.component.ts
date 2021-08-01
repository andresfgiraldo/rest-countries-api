import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() countries: Country[];

  constructor() { }

  ngOnInit(): void {
  }

}
