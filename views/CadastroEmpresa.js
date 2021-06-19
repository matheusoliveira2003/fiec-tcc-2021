import React from 'react';
import { useState } from 'react';
import { View , TextInput, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Button } from 'react-native';
import {stylesEmpresa} from '../assets/css/CadastroEmpresaCss';

export default function CadastroEmpresa(props) {

    const [cnpj, setCnpj] = useState(null);
    const [nome, setNome] = useState(null);
    const [tel, setTel] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [nomeProp, setNomeProp] = useState(null);
    const [cpfProp, setCpfProp] = useState(null);
    const [ramo, setRamo] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    async function sendForm() {
        let response = await fetch('http://26.235.229.243:3000/cadastroEmpresa', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                cnpj: cnpj,
                nome: nome,
                tel: tel,
                endereco: endereco,
                nomeProp: nomeProp,
                cpfProp: cpfProp,
                ramoEmp: ramo,
                email: email,
                senha: senha
            })
        })
    }
    return (
        <KeyboardAvoidingView style = {stylesEmpresa.container}>
            <ScrollView>
                <View style={stylesEmpresa.View}>
                    <Text style={stylesEmpresa.Text}>Cadastro de Empresa</Text>

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Nome da Empresa"
                    autoCorrect = {false}
                    onChangeText = {text=>setNome(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Nome Completo do proprietário"
                    autoCorrect = {false}
                    onChangeText = {text=>setNomeProp(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "CPF do proprietário"
                    autoCorrect = {false}
                    onChangeText = {text=>setCpfProp(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "CNPJ"
                    autoCorrect = {false}
                    onChangeText = {text=>setCnpj(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Ramo Empresarial"
                    autoCorrect = {false}
                    onChangeText = {text=>setRamo(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Telefone"
                    autoCorrect = {false}
                    onChangeText = {text=>setTel(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Endereço"
                    autoCorrect = {false}
                    onChangeText = {text=>setEndereco(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Email"
                    textContentType = 'emailAddress'
                    autoCorrect = {false}
                    onChangeText = {text=>setEmail(text)}
                    />

                    <TextInput
                    style = {stylesEmpresa.input}
                    placeholder = "Senha"
                    textContentType = 'password'
                    autoCorrect = {false}
                    onChangeText = {text=>setSenha(text)}
                    />
                </View>

                <TouchableOpacity>
                    <Button 
                    onPress={() => sendForm()}
                    title = 'Cadastrar'
                    color = '#FFD700'
                    />
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}