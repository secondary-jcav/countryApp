import { CountryService } from './country.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService],
    });

    service = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchCountry', () => {
    it('should return an array of countries', () => {
      const query = 'USA';
      const mockCountries = 'United States';

      service.searchCountry(query).subscribe((countries) => {
        expect(countries[0]['name']['common']).toEqual(mockCountries);
      });

      const req = httpMock.expectOne(`${service.apiUrl}/name/${query}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCountries);
    });
  });

  describe('searchCapital', () => {
    it('should return an array of countries', () => {
      const query = 'Washington, D.C.';
      const mockCapital = 'Washington, D.C.';

      service.searchCapital(query).subscribe((countries) => {
        expect(countries[0]['capital']).toEqual(mockCapital);
      });

      const req = httpMock.expectOne(`${service.apiUrl}/capital/${query}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCapital);
    });
  });

  describe('getCountryByAlpha', () => {
    it('should return an array of countries', () => {
      const query = 'US';
      const mockCode = 'US';

      service.getCountryByAlpha(query).subscribe((countries) => {
        expect(countries[0]['cca2']).toEqual(mockCode);
      });

      const req = httpMock.expectOne(`${service.apiUrl}/alpha/${query}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockCode);
    });
  });
});
