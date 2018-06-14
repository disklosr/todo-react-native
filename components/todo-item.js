import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';


const TodoItem = ({ item, onPress }) =>
    <TouchableNativeFeedback
    onPress={() => onPress(item.id)}
    background={TouchableNativeFeedback.SelectableBackground()}>
        <View pointerEvents="box-only" style={{
            flex: 1,
            flexDirection: 'column',
            // paddingHorizontal: 12,
            paddingVertical: 24,
            justifyContent: 'center',
            height: 40
        }}>
            <CheckBox
                
                checked={item.completed}
                title={item.content}
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }} />
        </View>
    </TouchableNativeFeedback>


export default TodoItem