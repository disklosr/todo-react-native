import React, { Component } from 'react';
import { FormInput, FormLabel } from 'react-native-elements'
import { View } from 'react-native'

export default class TodoInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.textChanged = this.textChanged.bind(this)
    }

    render() {
        return (
            <View>
                <FormLabel>New</FormLabel>
                <FormInput
                    placeholder='Add new todo item'
                    onChangeText={(text) => this.setState({ text: text })}
                    onSubmitEditing={() => this.props.addTodo(this.state.text)} />
            </View>
        )
    }

    submit() {
        console.log('submit text: ' + JSON.stringify(this.props));
        this.props.addTodo(this.state.text);
    }

    textChanged(text) {
        this.setState(state => { text: text });
    }
}