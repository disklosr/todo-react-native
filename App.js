import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import { View } from 'react-native'
import { Colors } from './constants'
import Todo from './components/todo'



const reduxStore = createStore(reducer, {
  todos: [
    { id: 1, content: "Try react native", completed: false },
    { id: 2, content: "Buy milk", completed: true }
  ]
});


export default class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
          <Todo />
        </View>
      </Provider>
    );
  }
}