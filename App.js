import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Alert, Touchable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodoForm from './components/AddTodoForm';

export default function App() {

  // const [name, setName] = useState('gc');
  const [todos, setTodos]= useState([{task: 'Exercise 20 mins', key: '1'}, {task: 'Study 5 hours', key: '2'}]);

  const removeTodoItem =(key) => {
    setTodos((prevTodos) => {
      return todos.filter((todo) => todo.key != key);
    })
  }

  const addTodoItem =(newTask) => {
    //only add if the somthing is typed in the box
    if(newTask.length > 3){
      setTodos((prevTodos) => {
        return [
          {task: newTask, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('oops!', 'a todo must be over 3 characters long', [{text: 'Got it!', onPress: () => console.log('alert closed')}])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
     <View style={styles.body}>
        <AddTodoForm addTodoItem={addTodoItem}/>
        <FlatList  data={todos} renderItem={({ item }) => (<TodoItem item={item} removeTodoItem={removeTodoItem} />)}/>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body:{
    padding: 40,
    margin: 20
  },
  content: {
    padding: 40,
    margin: 20,
    textAlign: 'center',
  }
});
