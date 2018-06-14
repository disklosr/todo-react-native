import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from './reducer';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    handleAdd = () => {
        this.setState((state) => ({ text: '' }))
        this.props.addTodo(this.state.text)
    }

    handleInput = (text) => {
        this.setState((state) => ({
            text: text
        }))
    }

    renderTodoItem = ({ item }) => {
        return (
            <TouchableHighlight>
                <Text>{item.value}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.todosListContainer}
                    style={styles.todosList}
                    data={this.props.list}
                    renderItem={this.renderTodoItem}
                />
                <TextInput
                    style={{ height: 40, width: 80 + '%', marginTop: 40 }}
                    placeholder="Add a todo item here"
                    onChangeText={this.handleInput}
                    value={this.setState.text}
                />

                <Button title="Add new todo Item here" onPress={this.handleAdd} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    todosList: {
        width: 80 + '%',
        flex: 1,
        height: 400
    },

    todosListContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
});

mapStateToProps = (state) => {
    return {
        list: state.todos.map(_ => ({ key: _, value: _ }))
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        addTodo: (newTodo) => { dispatch(addTodo(newTodo)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);