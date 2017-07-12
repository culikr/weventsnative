import React from 'react';
import {
  AppRegistry,
  Text, 
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  FlatList,
  AsyncStorage
} from 'react-native';

import ListRow from '../components/listrow';
import { StackNavigator } from 'react-navigation';
  
import {getCityId, getCityInfo} from '../action/request';

// var getChave = {
//   teste: function (cityName) {

//     const apiUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=CGuGYYklWVzjsjtnPsXuMrCsCjTkqnhs&q='+cityName+'';

//     return fetch(apiUrl)
//       .then((response) => response.json())
//       // .then((responseJson) => {
//       //   //return responseJson[0].Key;

//       //   console.log("ERA PRA RETORNAR>>>>" + responseJson[0].Key)


//       //   return responseJson[0].Key
//       // })
//       .catch((error) => {
//         console.error(error);
//       }).done();
//   }
// }; 

var random = {
  gerar: function () {
    var numero_aleatorio = Math.random();

    numero_aleatorio = Math.floor(numero_aleatorio * 10);

    return numero_aleatorio
  }
}

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 30);
  alert(numero_aleatorio);
}

      

class HomeScreen extends React.Component {
    
  static navigationOptions = ({ navigation }) => ({
      title: 'WEvents',
      headerRight: <Button title="Add" onPress={() => navigation.navigate('NewEvent')}/>

  });

  

  constructor(props) {
    super(props);
    this.state = { 
      data: [
        //{"evento":"teste","local":"nao sei","dataini":"01/10/2019","datafim":"01/10/2019"},
        //{"evento":"teste2","local":"Jasei","dataini":"01/10/2019","datafim":"01/10/2020"},
      ],
       jsonDataCity: '',
       jsonDataTemp: '',
    
    };
  }

  componentWillMount(){
    //alert('will mount')
  }

  componentDidMount() {

    //alert('didmount')
    console.log("componentDidMount")

    //obter todas chaves
    AsyncStorage.getAllKeys((err, keys) => {

      //alert(keys)

      AsyncStorage.multiGet(keys, (err, stores) => {

        //alert(stores)

        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];  //SE TROCA AQUI MANUAL ELE CARREGA AS DIFERENTES KEYS
          let value = store[i][1];

          console.log("stores.length : " + stores.length)  

          objeto = JSON.parse([value])

          //alert(value)

          this.setState(
            {data: [...this.state.data, ...[objeto]]}
          )
        });
      });
    });

    
  }

  loaditem = (key) => {
    console.log("loaditem(" + key + ")")

    async function _localStorage() {
      console.log("_localStorage")

      const v = await AsyncStorage.getItem(key);

      objeto = JSON.parse(v)

      return objeto
    }
    return _localStorage()
  }

  

  chamaDetable( item ) {
      const { navigate } = this.props.navigation;
      let jsonDataCity;
      let jsonDataCity;
  getCityId(item.local).then( response => jsonDataCity:response );
                     
  getCityInfo(jsonDataCity).then(response => jsonDataTemp:response);
  console.log(jsonDataCity);
  console.log(jsonDataTemp);
  navigate('Detail', {
                    //aqui tem q pegar da API 
                    // a max, min, umidade e imagem
                    eventname: item.evento, 
                    date: item.date,
                    max: jsonDataCity.DailyForecasts[0].Temperature.Maximum.Value, //item.max,
                    min: jsonDataCity.DailyForecasts[0].Temperature.Minimum.Value, //item.min,
                    image: jsonDataCity.DailyForecasts[0].Day.Icon,
                    umidade: 2,// item.umidade
                    });
  	  
	// }

  


  getCityKey = (cityName) => {
    //const APIKEY = 'CGuGYYklWVzjsjtnPsXuMrCsCjTkqnhs'; 

    const apiUrl = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=CGuGYYklWVzjsjtnPsXuMrCsCjTkqnhs&q='+cityName+'';

      //console.log('APIURL --------> ' + apiUrl)
      return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        //return responseJson[0].Key;
        return this.getCityInfo(responseJson[0].Key)
      })
      .catch((error) => {
        console.error(error);
      }).done();
  }

  getCityInfo = (cityKey) => {

    const apiUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/'+cityKey+'?apikey=CGuGYYklWVzjsjtnPsXuMrCsCjTkqnhs&language=es-es&details=true&metric=tru'

      return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log('AQUIIII ----> ' + JSON.stringify(responseJson[0]))
        //console.log('AQUIIII ----> ' + JSON.stringify(responseJson[0]))
        console.log("ICONE AQUI VEM CERTO:: ---> " + responseJson.DailyForecasts[0].Day.Icon)

        return responseJson.DailyForecasts[0].Day.Icon;
      })
      .catch((error) => {
        console.error(error);
      }).done();
  }

  

  getIcone = () => {
    return random.gerar();//getChave.teste(41);
  }

  getMax = () => {
    return random.gerar() + 30;//getChave.teste(41);
  }

  getMin = () => {
    return random.gerar() + 10;//getChave.teste(41);
  }

  getUmidade = () => {
    return random.gerar() + 10//getChave.teste(41);
  }


  



  render() {
    const { navigate } = this.props.navigation;

    return (
        <View style={styles.container}>

        <FlatList
            //ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
            //    <View style={[style.separator, highlighted && {marginLeft: 0}]} />
            //)}

            style={styles.flat}


            //data={
            //[
            //  {key: '1', evento: 'Show', dataini:'10/10/2010', max: '10', min: '5', umidade: '3'}, 
            //  {key: '2', evento:'Férias', dataini:'23/10/2015', max: '33', min: '22', umidade: '11'}
            //]
            //}

            data={this.state.data}
            

            renderItem={({item, separators}) => (
            <TouchableHighlight
               
                
               // Culik comentado para chamar funcao acima 
                onPress={() =>   this.chamaDetable( item ) 
//navigate('Detail', {
    //                //aqui tem q pegar da API 
                    // a max, min, umidade e imagem
//                    eventname: item.evento, 
//                    date: item.date,
//                    max: this.getMax(), //item.max,
//                    min: this.getMin(), //item.min,
//                    image: this.getIcone(),
//                    umidade: this.getUmidade(),// item.umidade
                    )}
                //onShowUnderlay={separators.highlight}
                //onHideUnderlay={separators.unhighlight}
                //onPress={() =>this.chamaDetable(item)}
                >
            <View style={{backgroundColor: 'white'}}>
                <ListRow eventname={item.evento} eventperiod={item.date} />
            </View>
            </TouchableHighlight>
            )}
        /> 
        </View> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flat:{
    width: '100%',
  },
  list: {
    width: '100%',
    height: 20,
    borderWidth:1,
  },
  
});

export default HomeScreen