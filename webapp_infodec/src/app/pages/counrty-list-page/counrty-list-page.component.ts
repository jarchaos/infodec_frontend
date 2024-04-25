import { Component } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@Component({
  selector: 'app-counrty-list-page',
  standalone: true,
  imports: [CountryListComponent],
  templateUrl: './counrty-list-page.component.html',
  styleUrl: './counrty-list-page.component.scss'
})
export class CounrtyListPageComponent {

}
