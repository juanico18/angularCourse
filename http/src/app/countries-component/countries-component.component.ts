import { Component, OnInit } from '@angular/core';
import { RESTCountriesService } from '../providers/rest-countries.service';

@Component({
  selector: 'app-countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.css']
})
export class CountriesComponentComponent implements OnInit {
  countryName:string;
  capital:string;

  constructor(private restCountriesService: RESTCountriesService) { }

  ngOnInit() {
  }

  showCapital(){
    this.restCountriesService.getCountry(this.countryName).subscribe(
      data => this.capital = data[0].capital)
  }
}
