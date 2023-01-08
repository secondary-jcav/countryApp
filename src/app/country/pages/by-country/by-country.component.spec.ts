import { ByCountryComponent } from './by-country.component';
import { of, throwError } from 'rxjs';
describe('ByCountryComponent', () => {
  let component: ByCountryComponent;
  let countryServiceMock: any;

  beforeEach(() => {
    countryServiceMock = {
      searchCountry: jest.fn(),
    };

    component = new ByCountryComponent(countryServiceMock);
  });

  it('should initialize searchTerm to an empty string', () => {
    expect(component.searchTerm).toBe('');
  });

  it('should initialize isErrored to false', () => {
    expect(component.isErrored).toBe(false);
  });

  it('should initialize countries to an empty array', () => {
    expect(component.countries).toEqual([]);
  });

  it('should call searchCountry on the countryService with the correct search term and assign the response to countries in search', () => {
    const searchTerm = 'test';
    const response = 'Test Country';
    countryServiceMock.searchCountry.mockReturnValue(of(response));
    component.search(searchTerm);
    expect(countryServiceMock.searchCountry).toHaveBeenCalledWith(searchTerm);
  });

  it('should handle errors correctly in search', () => {
    const searchTerm = 'test';
    countryServiceMock.searchCountry.mockReturnValue(throwError('error'));
    component.search(searchTerm);
    expect(component.isErrored).toBe(true);
    expect(component.countries).toEqual([]);
  });

  it('should set isErrored to false in suggest', () => {
    const keys = 'test';
    component.suggest(keys);
    expect(component.isErrored).toBe(false);
  });
});
