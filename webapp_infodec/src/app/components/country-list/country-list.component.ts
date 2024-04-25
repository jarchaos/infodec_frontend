import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Country } from '../../interfaces/Country.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { City } from '../../interfaces/City.interface';
import { Exchange } from '../../interfaces/Exchange.interface';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit{

  countryList: Country[] = [];
  cityList: City['response'][] = [];
  exchangeInfo: Exchange | undefined;
  selectedCountry?: number;

  constructor(private services: DataService) {}

  ngOnInit(): void {
    this.services.getCountries().subscribe({
      next: (countries: Country[]) => {
        console.log(countries)
        this.countryList = countries;
      },
      error: (err) => {
        console.error('Error fetching countries:', err);
      }
    });
  }

  onCountryChange(): void {

    if (this.selectedCountry) {
      this.services.getExchangeByCountry(this.selectedCountry).subscribe({
        next: (exchangeData: Exchange) => {
          if (exchangeData.success) {

            this.exchangeInfo = exchangeData;
          }
        },
        error: (err) => {
          console.error('Error fetching exchange info:', err);
        }
      });

      // Llamada al servicio para obtener las ciudades
      this.services.getCitiesByCountry(this.selectedCountry).subscribe({
        next: (cityData: City) => {
          if (cityData.success) {

            console.log(cityData)
            console.log(cityData.response)
            // this.cityList = cityData.response;
          }
        },
        error: (err) => {
          console.error('Error fetching cities:', err);
        }
      });
    }
  }

}
