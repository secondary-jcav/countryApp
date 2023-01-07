import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-capital-table',
  templateUrl: './capital-table.component.html',
  styleUrls: ['./capital-table.component.css'],
})
export class CapitalTableComponent {
  @Input() countries: Country[] = [];
}
