import { Component } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { BudgetInputComponent } from '../../components/budget-input/budget-input.component';

@Component({
  selector: 'app-counrty-list-page',
  standalone: true,
  imports: [CountryListComponent, BudgetInputComponent],
  templateUrl: './counrty-list-page.component.html',
  styleUrl: './counrty-list-page.component.scss'
})
export class CounrtyListPageComponent {

}
