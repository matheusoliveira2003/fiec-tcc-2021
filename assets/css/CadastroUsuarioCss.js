import React from 'react';
import { StyleSheet } from 'react-native';

const stylesUsuario = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F07B2',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Text: {
        marginTop: '7%',
        marginBottom: '10%',
        color: "#FFD700",
        fontSize: 30,
        fontWeight: 'bold',
    },

    View: {
        flex: 1,
        alignItems: 'center',
    },

    input: {
        backgroundColor: '#fff',
        width: 350,
        marginBottom: 15,
        fontSize: 17,
        padding: 10,
    },

    picker: {
        width: 350,
        backgroundColor: 'rgb(255,255,255)',
        marginBottom: 15,
        borderRadius: 7,
        color: '#A9A9A9',
    },
});
export {stylesUsuario};