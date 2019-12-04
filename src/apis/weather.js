const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


export function findWeather(coordinates) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();


    let unixTime = "1575468000";
    let date = "2019-12-04";

    const cors = "https://cors-anywhere.herokuapp.com/";
    let url = `${cors}https://api.darksky.net/forecast/${WEATHER_API_KEY}/${coordinates},${unixTime}?date=${date}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      }
      else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}


// lat and lon format = 47.6062,-122.3321
// unix Time format = 1575468000
// date format = 2019-12-04
// TEST STRING https://api.darksky.net/forecast/8fe27ceba498ffad445a0d2847fa57e6/47.6062,-122.3321,1575468000?date=2019-12-05;