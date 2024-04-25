import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit{

  constructor(private serviceCountryList: DataService){}

  countryList?:Country;

  ngOnInit(): void {
    this.serviceCountryList.getCountries().subscribe({
      next: (country: Country | undefined) => {
        console.log(country)
        this.countryList = country;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
