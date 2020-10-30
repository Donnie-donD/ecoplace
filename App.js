import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


import Login from './screens/Login';
import Cadastro from './screens/Cadastro';


export default function App(){

  const Navegacao = createStackNavigator();

  return(

    <NavigationContainer>
        <Navegacao.Navigator headerMode='none'>
          <Navegacao.Screen name='login' component={Login}/>
          <Navegacao.Screen name='cadastro' component={Cadastro}/>
        </Navegacao.Navigator>
    </NavigationContainer>
  )
}