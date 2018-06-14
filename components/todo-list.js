import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from './../constants'
import TodoItem from './todo-item';

export default class TodosList extends Component {

    renderTodoItem = ({ item }) => <TodoItem onPress={this.props.toggleTodo} item={item} />

    renderSeparator = () => {
        return (
            <View style={{
                height: 1,
                width: 90 + '%',
                opacity: 0.8,
                backgroundColor: "#CED0CE",
                alignContent: 'center',
                justifyContent: 'center'
            }}>
            </View>
        );
    };

    renderFooter = () => {
        return (
            <View style={{ flex: 1 }}>
                <Button buttonStyle={{ margin: 0, padding: 0, height: 48, width: 100 + '%' }} backgroundColor='white' color={Colors.primaryColor} clear title="Load More Items" />
            </View>
        )
    }

    renderHeader = () => {
        return (
            <View>
                <Text style={{ height: 48, padding: 12, color: 'grey', backgroundColor: Colors.backgroundColor }}>
                    MY TODO ITEMS
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.todosList}
                    data={this.props.todos}
                    renderItem={this.renderTodoItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    keyExtractor={(item) => item.id.toString()}
                // ListFooterComponent={this.renderFooter}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    todosList: {
        width: 100 + '%',
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
});