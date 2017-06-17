import React from 'react'

import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

class NewEvent extends React.Component {

  static navigationOptions = ({ navigation }) => ({
      title: 'Add',
      //headerRight: <Button title="Save" onPress={() => save()}/>

  });

 save = () => {
      return (
        console.log('fazer salvar os dados')
      )
  }

  render() {
    return (
        
      <View style={styles.container}>

        
        <TextInput style={styles.textinput} placeholder="Nome evento" />
        <TextInput style={styles.textinput} placeholder="Local" />
        <TextInput style={styles.textinput} placeholder="Data Inicial" />
        <TextInput style={styles.textinput} placeholder="Data Final" />

        <Button title="Save" onPress={() => this.save()}/>

      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
  },
  textinput: {
      margin: 15,
      height: 50,
      borderColor: '#7a42f4',
      borderWidth: 1
  },
})


export default NewEvent 