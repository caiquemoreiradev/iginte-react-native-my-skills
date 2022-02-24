import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ onPress }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text
                style={styles.buttonText}
            >
                Add skill
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#1DB863',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10
    },

    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }

})