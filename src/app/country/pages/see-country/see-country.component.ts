import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css'],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;
  timezones: string[] = [];
  currency: string = '';
  //currency: string = '' ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByAlpha(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country[0];
        this.timezones = this.country.timezones;
        this.currency = Object.keys(this.country.currencies)[0];
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.countryService.getCountryByAlpha(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });
  }
}
