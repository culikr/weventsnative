
import React from 'react'

import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  Button,
  AsyncStorage } from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';

const IMAGES = {
  1: require('../images/1.png'), // statically analyzed
  2: require('../images/02.png'), // statically analyzed
  3: require('../images/03.png'), // statically analyzed
  4: require('../images/04.png'), // statically analyzed
  5: require('../images/05.png'), // statically analyzed
  6: require('../images/06.png'), // statically analyzed
  7: require('../images/07.png'), // statically analyzed
  8: require('../images/08.png'), // statically analyzed
  //9: require('../images/09.png'), // statically analyzed
  //10: require('../images/10.png'), // statically analyzed
  11: require('../images/11.png'), // statically analyzed
  12: require('../images/12.png'), // statically analyzed
  13: require('../images/13.png'), // statically analyzed
  14: require('../images/14.png'), // statically analyzed
  15: require('../images/15.png'), // statically analyzed
  16: require('../images/16.png'), // statically analyzed
  17: require('../images/17.png'), // statically analyzed
  18: require('../images/18.png'), // statically analyzed
  19: require('../images/19.png'), // statically analyzed
  20: require('../images/20.png'), // statically analyzed
  21: require('../images/21.png'), // statically analyzed
  22: require('../images/22.png'), // statically analyzed
  23: require('../images/23.png'), // statically analyzed
  24: require('../images/24.png'), // statically analyzed
  25: require('../images/25.png'), // statically analyzed
  26: require('../images/26.png'), // statically analyzed
  //27: require('../images/27.png'), // statically analyzed
  //28: require('../images/28.png'), // statically analyzed
  29: require('../images/29.png'), // statically analyzed
  30: require('../images/30.png'), // statically analyzed
  31: require('../images/31.png'), // statically analyzed
  32: require('../images/32.png'), // statically analyzed
  33: require('../images/33.png'), // statically analyzed
  34: require('../images/34.png'), // statically analyzed
  35: require('../images/35.png'), // statically analyzed
  36: require('../images/36.png'), // statically analyzed
  37: require('../images/37.png'), // statically analyzed
  38: require('../images/38.png'), // statically analyzed
  39: require('../images/39.png'), // statically analyzed
  40: require('../images/40.png'), // statically analyzed
  41: require('../images/41.png'), // statically analyzed
  42: require('../images/42.png'), // statically analyzed
  43: require('../images/43.png'), // statically analyzed
  44: require('../images/44.png'), // statically analyzed
}


class DetailScreen extends React.Component {

  

  
  static navigationOptions = ({ navigation }) => ({
    //title: `Evento: ${navigation.state.params.eventname}`,
    headerRight: <Button 
                    title="Delete" 

                    onPress={() => 
                      {
                        AsyncStorage.removeItem(navigation.state.params.eventname)

                        alert(navigation.state.params.eventname + ' apagado.')
                      }
                    }
                 />
  });

  render() {

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>

        
        <Text style={styles.title}>{params.eventname}</Text>

        <Text style={styles.date}>{params.date}</Text>

        <Image 
          style={styles.image} 
          source={IMAGES[params.image]}
          //source={require('../images/02.png')}
          //source={require('../images/'+'02'+'.png')}
        />

        <Text style={styles.infotext}>Temperatura mínima: {params.min}</Text>
        <Text style={styles.infotext}>Temperatura máxima: {params.max}</Text>
        <Text style={styles.infotext}>Umidade: {params.umidade}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: '20%',
  },
  title: {
    color: 'blue',
    fontSize: 30,
  },
  date: {
    color: 'blue',
    fontSize: 20,
    padding: 10,
  },
  image: {
      padding: 30,
  },
  infotext: {
    color: 'blue',
    fontSize: 15,
    padding: 10,
  },
})

export default DetailScreen 