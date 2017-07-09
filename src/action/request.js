 function getCityId(cityName) {
    const APIKEY = 'gDUUNHqhBr3Fku0WU4zFy0Ffmr1AorrW';
    const apiUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${cityName}';
    return fetch('apiUrl')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.Key[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  
  function getCityInfo(key) {
  const APIKEY = 'gDUUNHqhBr3Fku0WU4zFy0Ffmr1AorrW';
  const apiUrlTemp = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${APIKEY}&language=es-es&details=true&metric=true';
    .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
}
