
export function getCityId(cityName) {
    
    const apiUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=gDUUNHqhBr3Fku0WU4zFy0Ffmr1AorrW&q=${cityName}`;

    console.log(apiUrl);  

    return fetch(apiUrl)
      .then((response) => {
        console.log("response.json() da getCityId: " + JSON.stringify(response.json()));
        response.json()
      })
      .then((responseJson) => {
        console.log("responseJson da getCityId: " + responseJson.Key[0]);
        return responseJson.Key[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }

export  function getCityInfo(key) {
  
  const apiUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=gDUUNHqhBr3Fku0WU4zFy0Ffmr1AorrW&language=es-es&details=true&metric=true`;
    
    console.log(apiUrl);
    
    return fetch(apiUrl)
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
