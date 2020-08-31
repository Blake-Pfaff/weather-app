// tests/services/weather.spec.js
import weather from "@/services/api";

// Fake data
const fakeResponse = {
  coord: { lon: -122.09, lat: 37.39 },
  weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
  base: "stations",
  main: {
    temp: 280.44,
    pressure: 1017,
    humidity: 61,
    temp_min: 279.15,
    temp_max: 281.15,
  },
  visibility: 12874,
  wind: { speed: 8.2, deg: 340, gust: 11.3 },
  clouds: { all: 1 },
  dt: 1519061700,
  sys: {
    type: 1,
    id: 392,
    message: 0.0027,
    country: "US",
    sunrise: 1519051894,
    sunset: 1519091585,
  },
  id: 0,
  name: "Mountain View",
  cod: 200,
};

// Mocking fetch()
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeResponse),
  })
);

describe("Weather Service", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("contains a fetchWeatherByZip method", () => {
    const hasMethod = weather["fetchWeatherByZip"] !== undefined;
    expect(hasMethod).toBe(true);
  });

  it("returns weather data from fetchWeatherByZip", async () => {
    const payload = await weather.fetchWeatherByZip(60611);
    expect(payload.weather[0].id).toBe(500);
  });
});
