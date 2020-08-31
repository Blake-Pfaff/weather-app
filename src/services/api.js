/**
 * API KEY
 *
 * @var string
 * @return void
 */
const API_KEY = process.env.VUE_APP_API_KEY;
/**
 * Weather Service
 *
 * @description The application service to fetch data from an external API
 * @return Object
 */
const weatherService = {
  async fetchWeatherByZip(searchTerm) {
    if (!searchTerm) throw new Error("Zip is required");
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${searchTerm},us&appid=${API_KEY}`;
    const request = await fetch(url);
    const payload = await request.json();
    return payload;
  },
};
export default weatherService;
