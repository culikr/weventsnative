import React from 'react'

import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TextInput,
  AsyncStorage } from 'react-native';

class NewEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      evento: '',
      local: '',
      dataini: '',
      datafim: '' 
    };
  }

  componentWillMount() {
    this.load()
  }

  static navigationOptions = ({ navigation }) => ({
      title: 'Add',
      //headerRight: <Button title="Save" onPress={() => save()}/>
  });
  

  load = () => {
    async function _localStorage() {
      const v = await AsyncStorage.getItem("UID123");

      if (v) {
        global.gValue = v;
      } else {
        global.gValue = 'hello world!';
      }

      objeto = JSON.parse(global.gValue)

      this.state = objeto

      alert(this.state.evento
        + ' / ' + this.state.local
        + ' / ' +this.state.dataini
        + ' / ' +this.state.datafim)

    }
    _localStorage()
  }

  save = () => {

    let UID123_object = {
      evento: this.state.evento,
      local: this.state.local,
      dataini: this.state.dataini,
      datafim: this.state.datafim,
    };

    try {
      AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
        alert('Salvo')
      });
    } catch (error) {
      // Error saving data
      alert(error)
    }  
  }

  render() {
    return (
        
      <View style={styles.container}>

        
        <TextInput 
          style={styles.textinput} 
          placeholder="Nome evento" 
          onChangeText={(evento) => this.setState({evento})}
          value={this.state.evento}
        />

        <TextInput 
          style={styles.textinput} 
          placeholder="Local"
          onChangeText={(local) => this.setState({local})}
          value={this.state.local}
        />

        <TextInput 
          style={styles.textinput} 
          placeholder="Data Inicial" 
          onChangeText={(dataini) => this.setState({dataini})}
          value={this.state.dataini}
        />

        <TextInput 
          style={styles.textinput} 
          placeholder="Data Final" 
          onChangeText={(datafim) => this.setState({datafim})}
          value={this.state.datafim}
        />

        <Button title="Save" 
          onPress={() => this.save()}
        />

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