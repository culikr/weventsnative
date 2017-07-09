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
      ]
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

          // for(let j = 0; j < stores.length; j++){
          //   //alert(store[j][0] + " -> "+ store[j][1])

          //   var teste = [store[j][1]]

          //   objeto = JSON.parse(teste)

          //   //alert(JSON.stringify(objeto))

          //   this.setState(
          //     {data: [...this.state.data, ...teste]}
          //   )
          // }

          //alert(i + this.state.data)

          console.log("-------")  
          console.log("RESULT:" + result)
          console.log("STORES:" + stores)
          console.log("-------")  

          //this.setState(stores) 

          console.log("-------")  
          console.log("KEY:" + key)
          console.log("VALUE:" + value)
          console.log("-------")  

          // this.loaditem(key).then(res => {
          //   //console.log(res)
          // //alert(key) 

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
                onPress={() => navigate('Detail', {

                    //aqui tem q pegar da API 
                    // a max, min, umidade e imagem

                    eventname: item.evento, 
                    date: item.date,
                    max: 10, //item.max,
                    min: 5, //item.min,
                    //image: '../images/02.png', //item.image,
                    image: 1,
                    umidade: 2,// item.umidade
                    })}
                //onShowUnderlay={separators.highlight}
                //onHideUnderlay={separators.unhighlight}
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