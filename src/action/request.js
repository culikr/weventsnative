export function getCityId(cityName) {
    
    const apiUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=gDUUNHqhBr3Fku0WU4zFy0Ffmr1AorrW&q=${cityName}`;
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
       console.log(responseJson.Key[0]);
        return responseJson.Key[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  
export  function getCityInfo(key) {
  
  const apiUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=gDUUNHqhBr3Fku0WU4zFy0Ffmr1AorrW&language=es-es&details=true&metric=true`;
    return fetch(apiUrl)
    .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

