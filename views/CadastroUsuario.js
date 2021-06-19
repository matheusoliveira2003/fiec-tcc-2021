import React from 'react';
import { View , TextInput, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {stylesUsuario} from '../assets/css/CadastroUsuarioCss';
import { useState } from 'react';

export default function CadastroUsuario(props) {

    const [nome, setNome] = useState(null);
    const [data, setData] = useState(null);
    const [genero, setGenero] = useState(null);
    const [rg, setRg] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [tel, setTel] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    async function sendForm() {
        let response = await fetch('http://26.235.229.243:3000/cadastroUsuario', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                cpf: cpf,
                rg: rg,
                nome: nome,
                genero: genero,
                email: email,
                senha: senha,
                dataNasc: data,
                tel: tel,
                endereco: endereco
            })
        })
    }

    return (
        <KeyboardAvoidingView style = {stylesUsuario.container}>
            <ScrollView>
                <View style={stylesUsuario.View}>
                    <Text style={stylesUsuario.Text}>Cadastro de Usuário</Text>

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "Nome Completo"
                    autoCorrect = {false}
                    onChangeText = {text=>setNome(text)}
                    />

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "Data de Nascimento"
                    autoCorrect = {false}
                    onChangeText = {text=>setData(text)}
                    />

                   <Picker
                   style = {stylesUsuario.picker}
                   selectedValue = {genero}
                   onValueChange = {(item, indexItem) => {setGenero(item)}}
                   > 
                       <Picker.Item label = "Selecione o gênero" value = ""/>
                       <Picker.Item key = {0} label = "Masculino" value = "Masculino"/>
                       <Picker.Item key = {1} label = "Feminino" value = "Feminino"/>
                       <Picker.Item key = {2} label = "Outro" value = "Outro"/>
                   </Picker>
                        
                   

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "RG"
                    autoCorrect = {false}
                    onChangeText = {text=>setRg(text)}
                    />

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "CPF"
                    autoCorrect = {false}
                    onChangeText = {text=>setCpf(text)}
                    />

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "Telefone"
                    autoCorrect = {false}
                    onChangeText = {text=>setTel(text)}
                    />

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "Endereço"
                    autoCorrect = {false}
                    onChangeText = {text=>setEndereco(text)}
                    />

                    <TextInput
                    style = {stylesUsuario.input}
                    placeholder = "Email"
                    textContentType = 'emailAddress'
                    autoCorrect = {false}
                    onChangeText = {text=>setEmail(text)}
                    />

                    <TextInput
                    style = {stylesUsuario.input}
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