import React from 'react';
import {
  AppRegistry,
  Text, 
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  FlatList
} from 'react-native';

import ListRow from '../components/listrow';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    
  static navigationOptions = ({ navigation }) => ({
      title: 'WEvents',
      headerRight: <Button title="Add" onPress={() => navigation.navigate('NewEvent')}/>

  });


  

  render() {
    const { navigate } = this.props.navigation;
    

    return (
        <View style={styles.container}>

        <FlatList
            //ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
            //    <View style={[style.separator, highlighted && {marginLeft: 0}]} />
            //)}

            style={styles.flat}

            data={
            [
              {key: '1', event: 'Show', date:'10/10/2010', max: '10', min: '5', umidade: '3'}, 
              {key: '2', event:'Férias', date:'23/10/2015', max: '33', min: '22', umidade: '11'}
            ]
            }

            renderItem={({item, separators}) => (
            <TouchableHighlight
                onPress={() => navigate('Detail', {
                    eventname: item.event, 
                    date: item.date,
                    max: item.max,
                    min: item.min,
                    umidade: item.umidade
                    })}
                //onShowUnderlay={separators.highlight}
                //onHideUnderlay={separators.unhighlight}
                >
            <View style={{backgroundColor: 'white'}}>
                <ListRow eventname={item.event} eventperiod={item.date} />
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