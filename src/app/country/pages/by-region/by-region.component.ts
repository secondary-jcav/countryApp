import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  constructor(private countryService: CountryService) {}

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  getButtonState(region: string) {
    return this.activeRegion === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (this.activeRegion === region) {
      return;
    }

    this.activeRegion = region;
    this.countries = [];
    this.search(region);
  }

  search(receivedTerm: string) {
    this.countryService.getCountryByRegion(receivedTerm).subscribe(
      (resp) => {
        console.log(resp);
        this.countries = resp;
      },
      (err) => {
        console.log('Error');
        console.info(err);
        this.countries = [];
      }
    );
  }
}
