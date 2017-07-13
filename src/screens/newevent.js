import React from 'react'
//import uuid from 'react-native-uuid';

import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TextInput,
  AsyncStorage } from 'react-native';

import DatePicker from 'react-native-datepicker'

const uniqueId = require('react-native-unique-id')

class NewEvent extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { 
      evento: '',
      local: '',
      date: '',
      key: '',
      //datafim: '' 
    };
  }

  componentDidMount() {
    //this.load()

    // this.load().then(res => {
    //   //console.log(res)
    //   this.setState({
    //     evento: res.evento,
    //     local: res.local,
    //     dataini: res.dataini,
    //     datafim: res.datafim,
    //   })
    // } )
  }

  static navigationOptions = ({ navigation }) => ({
      title: 'Add',
      //headerRight: <Button title="Save" onPress={() => save()}/>
  });
  

  // load = () => {
  //   async function _localStorage() {
  //     const v = await AsyncStorage.getItem("UID123");

  //     if (v) {
  //       global.gValue = v;
  //     } else {
  //       global.gValue = 'hello world!';
  //     }

  //     objeto = JSON.parse(global.gValue)

  //     //this.setState(objeto)

  //     //this.state = objeto

  //     // alert(this.state.evento
  //     //   + ' / ' + this.state.local
  //     //   + ' / ' + this.state.dataini
  //     //   + ' / ' + this.state.datafim)
  //     return objeto

  //   }
  //   return _localStorage()
  // }

  save = () => {
    console.log("save()");

    let UID123_object = {
      evento: this.state.evento,
      local: this.state.local,
      date: this.state.date,
      key: this.state.evento,
      //dataini: this.state.dataini,
      //datafim: this.state.datafim,
    };

    try {

        // uniqueId()
        // .then(id => 
        //   AsyncStorage.setItem(id, JSON.stringify(UID123_object), () => {
        //     alert('Salvo')
        //   })
        // )
        // .catch(error => console.error(error))

        luuid = this.state.evento

        AsyncStorage.setItem(luuid, JSON.stringify(UID123_object), () => {
          alert('Event saved')
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
          placeholder="Event name" 
          onChangeText={(evento) => this.setState({evento})}
          value={this.state.evento}
        />

        <TextInput 
          style={styles.textinput} 
          placeholder="City"
          onChangeText={(local) => this.setState({local})}
          value={this.state.local}
        />

        {/*<TextInput 
          style={styles.textinput} 
          placeholder="Data" 
          onChangeText={(date) => this.setState({date})}
          value={this.state.date}
        />*/}

        <DatePicker
        style={{width: '90%'}}
        date={this.state.date}
        mode="date"
        placeholder="Select date"
        format="DD/MM/YYYY"
        minDate="01/01/2017"
        maxDate="31/12/2100"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderColor: '#7a42f4',
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
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
    backgroundColor: 'lightskyblue',
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