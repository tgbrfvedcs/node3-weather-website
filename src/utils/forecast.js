const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/50b61de8f22a4fac9637e1ae532e7bee/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out.\n 今日最高溫 " +
          body.daily.data[0].temperatureHigh +
          " 最低溫\n " +
          body.daily.data[0].temperatureLow +
          ". There is a " +
          body.currently.precipProbability +
          "% 降雨幾率."
      );
    }
  });
};

module.exports = forecast;
