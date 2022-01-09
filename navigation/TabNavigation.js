import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Task from '../components/Task';
import Profile from '../components/Profile';
import Plant from '../components/Plant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Add from '../components/Add';


const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (<Tab.Navigator
        barStyle={{ backgroundColor: '#fff' }}>
        <Tab.Screen 
        name= 'Task' 
        component={Task}
        options={{
            tabBarLabel: 'Task',
            tabBarIcon: ({ color }) => (
              <Icon name="tasks" color={color} size={26} />
            ),
          }}/>
        <Tab.Screen name= 'Plant' 
        component={Plant}
        options={{
            tabBarLabel: 'Plant',
            tabBarIcon: ({ color }) => (
              <Icon name="leaf" color={color} size={26} />
            ),
          }}/>
        <Tab.Screen name= 'Profile' 
        component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="user-circle" color={color} size={26} />
            ),
          }}/>
          <Tab.Screen name= 'Add' 
        component={Add}
        options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color }) => (
              <Icon name="plus-square" color={color} size={26} />
            ),
          }}/>
    </Tab.Navigator>
    )}

    
    

const styles = StyleSheet.create({
    container:{}

})
export default TabNavigator;