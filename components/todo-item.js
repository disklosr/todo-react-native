import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';


const TodoItem = ({ item }) => 
    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 24,
            justifyContent: 'center'
        }}>
            <CheckBox checked={item.completed} />
            <Text >{item.content}</Text>
        </View>
    </TouchableNativeFeedback>


export default TodoItem