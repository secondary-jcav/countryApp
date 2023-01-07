import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  searchTerm: string = '';
  isErrored: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(receivedTerm: string) {
    this.isErrored = false;
    this.searchTerm = receivedTerm;
    this.countryService.searchCountry(this.searchTerm).subscribe(
      (resp) => {
        console.log(resp);
        this.countries = resp;
      },
      (err) => {
        console.log('Error');
        console.info(err);
        this.isErrored = true;
        this.countries = [];
      }
    );
  }

  suggest(receivedKeys: string) {
    this.isErrored = false;
  }
}
