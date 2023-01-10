import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//item is like prop that has been sent from app.js
//prop must be in {}
export default function TodoItem({ item, removeTodoItem }){
    return(
        <TouchableOpacity onPress={() => removeTodoItem(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text> {item.task}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles= StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 2,
        flexDirection: 'row'
    },
    
});
