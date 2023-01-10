import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodoForm({addTodoItem}){

    const [newTodo, setNewTodo] = useState('');

    const changeHandler =(newTask) => {
        setNewTodo(newTask)
    }

    return(
    <View>
        {/*onChangeText passes the new value that has been added to text input automatically  */}
        <TextInput style={styles.input} placeholder='New todo' onChangeText={changeHandler}/>
        <Button color='coral' onPress={() => addTodoItem(newTodo)} title='Add todo' ></Button>
    </View>
    )
};

const styles= StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
});
