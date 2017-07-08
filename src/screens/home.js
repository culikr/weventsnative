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
      // key: '', 
      // event: '', 
      // dateini:'', 
      // datefim:'', 
      // max: '', 
      // min: '', 
      // umidade: ''
      data: [
        //{"evento":"teste","local":"nao sei","dataini":"01/10/2019","datafim":"01/10/2019"},
        //{"evento":"teste2","local":"Jasei","dataini":"01/10/2019","datafim":"01/10/2020"},
      ]
    };
  }

  componentDidMount() {
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

          //caso precise deletar algo por enquanto
          //AsyncStorage.removeItem(key)
          objeto = JSON.parse([value])

          //alert(JSON.stringify(objeto))

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

          // //TO DO: tem q fazer o state receber esse array
          // // e nao como abaixo

          //  this.setState({
          //   key: res.key,
          //   event: res.evento,
          //   dataini: res.dataini,
          //   datafim: res.datafim,
          //   max: '50',
          //   min: '10',
          //   umidade: '12'
          // })


          // //console.log("THIS.STATE:" + this.state)
          // })
        });
      });
    });

    
  }

  loaditem = (key) => {
    console.log("loaditem(" + key + ")")

    async function _localStorage() {
      console.log("_localStorage")

      const v = await AsyncStorage.getItem(key);

      // if (v) {
      //   global.gValue = v;
      // } else {
      //   global.gValue = 'hello world!';
      // }

      // objeto = JSON.parse(global.gValue)
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
                    eventname: item.evento, 
                    dataini: item.dataini,
                    max: item.max,
                    min: item.min,
                    umidade: item.umidade
                    })}
                //onShowUnderlay={separators.highlight}
                //onHideUnderlay={separators.unhighlight}
                >
            <View style={{backgroundColor: 'white'}}>
                <ListRow eventname={item.evento} eventperiod={item.dataini + " até " + item.dataini} />
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