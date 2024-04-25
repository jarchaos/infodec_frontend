import { Component } from '@angular/core';
import { CounrtyListPageComponent } from '../../counrty-list-page/counrty-list-page.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CounrtyListPageComponent, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
