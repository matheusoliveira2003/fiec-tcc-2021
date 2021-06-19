import React from 'react';
import { StyleSheet } from 'react-native';

const stylesMenu = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F07B2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        width: 150,
        height: 150,
    },  

    selected_spot: {
        marginBottom: 50,
    },

    selected_spot2: {
        marginTop: 50,
    },

    Text: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
});
export {stylesMenu};