import React from 'react'

import { StyleSheet, Text, View, Image } from 'react-native';

import {SimpleLineIcons} from '@expo/vector-icons'

const ListRow = ({eventname, eventperiod, icon}) => {

    const {container, row, column, text, button, image, line, period} = styles

    return (
        <View style={container}>

            <View style={row}>

                <View style={column}>
                    <Text style={text}> {eventname} </Text>

                    <Text style={period}> {eventperiod} </Text>
                </View>

                {/*<View style={image}>
                    <SimpleLineIcons name='emotsmile' size={30}/>
                </View>*/}

            </View>

      </View>

    );
} 


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightskyblue',
        height: 75,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    row: {
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:1,
        width:'100%',
        paddingLeft: 20,
    },
    column: {
        //backgroundColor: 'purple',
    },
    image: {
        paddingRight:30,
        paddingTop:15,
    }
    ,
    text: {
        color: 'navy',
        fontSize: 20,
        padding: 5,
    },
    period: {
        color: 'navy',
        fontSize: 15,
        padding: 5,
    },
    line: {
        backgroundColor: 'lightgrey',
        height: 1,
        width: '100%',

    }
})


export default ListRow 