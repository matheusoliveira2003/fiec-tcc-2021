import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/Login';
import CadastroMenu from './views/CadastroMenu';
import CadastroUsuario from './views/CadastroUsuario';
import CadastroEmpresa from './views/CadastroEmpresa';
import Vagas from './views/Vagas';


export default function App() {

  const Stack = createStackNavigator();

  return (

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen 
          name="Login" 
          component={Login}
          options = {{
            title: 'Entrar',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
          />

          <Stack.Screen 
          name="CadastroMenu" 
          component={CadastroMenu}
          options = {{
            title: 'Menu de Cadastro',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />

          <Stack.Screen 
          name="CadastroUsuario" 
          component={CadastroUsuario}
          options = {{
            title: '',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />

          <Stack.Screen 
          name="CadastroEmpresa" 
          component={CadastroEmpresa}
          options = {{
            title: '',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />

          <Stack.Screen 
          name="Vagas" 
          component={Vagas}
          options = {{
            title: '',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />

        </Stack.Navigator>

      </NavigationContainer>

  );
}

