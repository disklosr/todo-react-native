import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Colors } from './../constants';

export default class Header extends Component {
    render() {
        return (
                <View style={{ backgroundColor: Colors.secondaryColor, height: StatusBar.currentHeight }} />
        )
    }
}


class Header2 extends Component {
    render() {
        return (
            <View>
                <View style={{ backgroundColor: Colors.secondaryColor, height: StatusBar.currentHeight }} />
                <View style={{
                    height: 56,
                    backgroundColor: Colors.primaryColor,
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 56 }}>CTM</Text>
                </View>
            </View>
        )
    }
}