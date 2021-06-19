import { AsyncStorage } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, View, Image, TouchableOpacity, Text, StatusBar, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {stylesLogin} from '../assets/css/LoginCss';

export default function Login(props) {

    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [senha, setSenha] = useState(null);

    //Envio do form de Login
    async function sendForm() {
        let response = await fetch('http://26.235.229.243:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          nome: user,
          senha: senha,
        })
      });
      // CASO EMP OR USER NOT FOUND, LIMPARÁ OS DADOS TEMPORARIOS DE LOGIN
      let json = await response.json();
      if(json === 'emp or user not found') {
        setDisplay('flex');
        setTimeout(() => {
          setDisplay('none');
        }, 5000);
        await AsyncStorage.clear();
      }
      else { // CASO HAJA USER OR EMP, OS DADOS SERAO SALVOS NA SESSÃO E O USUARIO É REDIRECIONADO PARA A HOME
        await AsyncStorage.setItem('userData', JSON.stringify(json));
        props.navigation.navigate('Vagas');
      }
    }
    
    return (

        <KeyboardAvoidingView
        behavior = 'height' 
        style={stylesLogin.container}>
        

          <View style={stylesLogin.viewLogo}>
            <Image style={stylesLogin.img}
            source = {require('../assets/img/trabalhajovem-logo.png')}
            />
          </View>

          <View style={stylesLogin.viewInput}>
            <TextInput 
            style={stylesLogin.input}
            placeholder = "CPF/CNPJ"
            autoCorrect = {false}
            onChangeText = {text=>setUser(text)}
            />
        
            <TextInput 
            style={stylesLogin.input}
            placeholder = "Senha"
            autoCorrect = {false}
            onChangeText = {text=>setSenha(text)}
            secureTextEntry={true}
            />

            <Text style={stylesLogin.errorMessage(display)}>Login inválido, tente novamente!</Text>
          </View>

          <TouchableOpacity style={stylesLogin.buttonSubmit}>
            <Text 
            style={stylesLogin.buttonText}
            onPress={() => sendForm()}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>props.navigation.navigate('CadastroMenu')}>
            <Text
            style = {stylesLogin.Text}
            >Criar uma conta</Text>
          </TouchableOpacity>

          <StatusBar style='auto'/>
      </KeyboardAvoidingView>
    );
}