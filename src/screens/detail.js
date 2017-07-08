
import React from 'react'

import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  AsyncStorage } from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';


class DetailScreen extends React.Component {

  
  static navigationOptions = ({ navigation }) => ({
    //title: `Evento: ${navigation.state.params.eventname}`,
    headerRight: <Button title="Delete" onPress={() => AsyncStorage.removeItem(navigation.state.params.eventname)}/>
  });

  render() {

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>

        
        <Text style={styles.title}>{params.eventname}</Text>

        <Text style={styles.date}>{params.date}</Text>

        <SimpleLineIcons style={styles.image} name='emotsmile' size={150}/>

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