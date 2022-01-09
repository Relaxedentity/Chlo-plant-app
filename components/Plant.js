import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Plant = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Plant</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text:{
        fontSize:20,
        
    }
})
export default Plant;