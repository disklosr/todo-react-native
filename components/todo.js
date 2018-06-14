import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import TodoInput from './todo-input';
import TodoList from './todo-list';
import Header from './header';

class Todo extends Component {
    render() {
        return (
            <View>
                <Header />
                <TodoInput addTodo={this.props.addTodo} />
                <TodoList todos={this.props.todos} />
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

import { addTodo } from './../reducer';

mapDispatchToProps = () => {
    return {
        addTodo: (text) => addTodo(text)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);