import React, { Component } from 'react';
import { FormInput, FormLabel } from 'react-native-elements'
import { View } from 'react-native'

export default class TodoInput extends Component {

    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    render() {
        return (
            <View>
                <FormLabel>New</FormLabel>
                <FormInput
                    placeholder='Add new todo item'
                    onChangeText={(text) => this.setState({ text })}
                    onSubmitEditing={() => this.props.addTodo(this.state.text)} />
            </View>
        )
    }
}