import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const IndTask = (props) =>{
        return(
            <View style= {styles.item}>
                <View style= {styles.itemLeft}>
                    <TouchableOpacity style= {styles.square}></TouchableOpacity>
                    <Text style= {styles.itemText}>
                    {props.text}
                    </Text>
                </View>
                <View style= {styles.circular}></View>
            </View>
        )
    }
    const styles = StyleSheet.create({
        item:{
            backgroundColor:'#E4E3E3',
            padding:20,
            borderRadius:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:20,
        },
        itemLeft:{
            flexDirection:'row',
            alignItems:'center',
            flexWrap:'wrap', 
        },
        square:{
            width:20,
            height:20,
            backgroundColor:'#D9FED8',
            opacity:0.4,
            borderRadius:5,
            borderColor:'#BABABA',
            borderWidth:1,
            marginRight:15,
        },
        itemText:{
            maxWidth:'80%',
            fontSize:20,
        },
        circular:{
            width:12,
            height:12,
            borderWidth:2,
            borderRadius:5,
            borderColor:'#55BCF6',
    
        },
    
    });
    export default IndTask;
