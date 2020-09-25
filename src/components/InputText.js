import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const InputText = ({ label, iconName, value, onChangeText, placeholder, multiline, formErrors }) => {

    const { inputStyle, containerStyle, labelStyle, actionStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label}</Text>
            <View style={actionStyle}>
                <Feather name={iconName} size={20} color="black" />
                <TextInput
                    placeholder={placeholder}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    multiline={multiline || false}
                />
                {formErrors ?
                    <Feather name="circle" size={20} color="grey" /> :
                    <Feather name="check-circle" size={20} color="green" />
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    containerStyle: {
        backgroundColor: 'white',
        paddingVertical: 2,
        paddingHorizontal: 20,
    },
    actionStyle: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: 'center'
    },
    labelStyle: {
        color: '#05375a',
        fontSize: 18,
    }
});



export default InputText
