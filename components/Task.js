import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndTask from './IndTask'

const Task = () => {
    return(
    <View style={styles.container}>
      {/* Todays tasks */}

        <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>  
          <View style={styles.items}>
            {/* Tasks go here */}
            <IndTask text={'task 1'}/>
            <IndTask text={'task 2'}/>

          </View>    
        </View>
    </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
      },
       tasksWrapper:{
         paddingTop:80,
         paddingHorizontal: 20,
       },
       sectionTitle:{
         fontSize:24,
         fontWeight:'bold',
       },
       items:{
         marginTop:30,
       },
})
export default Task;