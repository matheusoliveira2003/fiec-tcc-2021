import {StyleSheet} from 'react-native';

const stylesLogin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F07B2',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    img: {
      width: 250,
      height: 67,
    },

    errorMessage:(text = 'none') => ({
      color: '#FF0000',
      fontWeight: 'bold',
      display: text,
    }),

    viewLogo: {
      flex: 0.08,
      paddingBottom: 70,
      justifyContent: 'center',
    },
  
    viewInput: {
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 25,
    },
  
    input: {
      flex: 0.35,
      backgroundColor: '#fff',
      width: '90%',
      height: '15%',
      marginBottom: 15,
      color: '#191919',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
  
    buttonSubmit: {
      flex: 0.08,
      alignItems: 'center',
      backgroundColor: '#FFD700',
      justifyContent: 'center',
      width: '75%',
      marginBottom: '2%',
      borderRadius: 7,
    },
  
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    buttonRegister: {
      marginTop: 10,
    },
  
    registerText: {
      color: '#fff',
      fontSize: 18,
    },

    Text: {
      color: '#fff',
      marginTop: 10,
      fontWeight: 'bold',
    }
});
export {stylesLogin};