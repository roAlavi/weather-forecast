import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';
import { addDays } from 'date-fns';
/**
 * Test file for resolver which covers most of business logic
 * this could have been done better in terms of coverage and can be improved later
 */
describe('Resolver test', () => {
  let resolver: WeatherResolver;
  let service: WeatherService;
  beforeAll(() => {
    service = new WeatherService();
    resolver = new WeatherResolver(service);
  });

  test('Should throw an error for more than 16 days', async() => {
    const futureDate = addDays(Date.now(), 17);
    const weatherQueryInput = {
      lat: 12,
      lon: 10,
      date: futureDate,
    };
    await expect(resolver.weather(weatherQueryInput))
      .rejects
      .toThrow('Input date must be within next 16 days.');
  });

  test('Should throw an error for past date', async() => {
    const pastDate = addDays(Date.now(), -1);
    const weatherQueryInput = {
      lat: 12,
      lon: 10,
      date: pastDate,
    };
    await expect(resolver.weather(weatherQueryInput))
      .rejects
      .toThrow('Input date must be within next 16 days.');
  });
});
