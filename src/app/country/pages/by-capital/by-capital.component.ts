import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  searchTerm: string = '';
  isErrored: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(receivedTerm: string) {
    this.isErrored = false;
    this.searchTerm = receivedTerm;
    this.countryService.searchCapital(this.searchTerm).subscribe(
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
