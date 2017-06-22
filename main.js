import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListRow from './src/components/listrow.js';
import NewEvent from './src/screens/newevent';
import HomeScreen from './src/screens/home';
import DetailScreen from './src/screens/detail';
import { StackNavigator } from 'react-navigation';


class App extends React.Component {

  render() {
    return (
      //<MainList title='WEvents' /> 
      //<NewEvent />
      //<ChatScreen />
      <HomeScreen  />
      //<HomeScreen />
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
  list: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const {container} = styles

const wevents = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: {screen: DetailScreen},
  NewEvent: {screen: NewEvent},
  
  
});

Expo.registerRootComponent(wevents);
