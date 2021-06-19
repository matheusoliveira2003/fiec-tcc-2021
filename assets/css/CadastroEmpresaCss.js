import React from 'react';
import { StyleSheet } from 'react-native';

const stylesEmpresa = StyleSheet.create({
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
        color: '#191919',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
});
export {stylesEmpresa};