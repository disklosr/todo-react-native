import React, { Component } from 'react';
import { Input } from 'react-native-elements'
import { View } from 'react-native'

export default class TodoInput extends Component {
    render() {
        return (
            <View>
                <Input placeholder='Add new todo item' onSubmitEditing={this.props.addTodo}></Input>
            </View>
        )
    }
}