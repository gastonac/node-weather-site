const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c6743b148c9a5d4a7c69827a75055a58&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback(
        "Unable to find location. Try different coordinates.",
        undefined
      );
    } else {
      callback(
        undefined,
        "As at " +
          body.current.observation_time +
          ", Todays forecast: " +
          body.current.weather_descriptions +
          ". Current temparature: " +
          body.current.temperature +
          " degrees C. There is a " +
          body.current.precip * 100 +
          "% chance of rain today."
      );
    }
  });
};

module.exports = forecast;
