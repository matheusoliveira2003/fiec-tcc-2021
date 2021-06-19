import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {stylesMenu} from '../assets/css/MenuCss';

export default function CadastroMenu(props) {
    return (
       <View style={stylesMenu.container}>
           <TouchableOpacity 
           style={stylesMenu.selected_spot}
           onPress={()=>props.navigation.navigate('CadastroEmpresa')}
           >
           <Image
                style = {stylesMenu.img}
                source = {require('../assets/icons/icon_empresa.png')}
                />
                <Text style={stylesMenu.Text}>Cadastro de Empresa</Text>
           </TouchableOpacity>

           <TouchableOpacity 
           style={stylesMenu.selected_spot2}
           onPress={()=>props.navigation.navigate('CadastroUsuario')}
           >
           <Image
                style = {stylesMenu.img}
                source = {require('../assets/icons/icon_usuario.png')}
                />
                <Text style={stylesMenu.Text}>Cadastro de Usuário</Text>
           </TouchableOpacity>
       </View>
    );
}