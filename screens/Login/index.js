import React, {useState} from 'react';
import {View, Text, ImageBackground, TextInput,Image, Alert, TouchableOpacity} from 'react-native';

import background from '../../assets/backLogin.png';
import logo from '../../assets/logo.png';
import estilo from './estilo';

const Login = (props) => {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const telaCadastro = () => {
        props.navigation.navigate('cadastro');
    }
    const telaHome = (array) => { 
        props.navigation.navigate('home',{arrayUser: array});
    }
    const FazerLogin = async () => {

        await fetch('http://192.168.0.9/banco/auth/login.php',{
            
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({email:email,senha:senha})
                    }).then((response)=>response.json())
                        .then((responseJson) => {
                            
                            if(responseJson != ""){

                                regex = /[v]+[e]+[r]+[i]+[f]+[i]+[q]+[u]+[e]/igm

                                if(responseJson.match(regex)){
                                    
                                    Alert.alert(
                                        
                                        'Aviso',
                                        responseJson,
                                        [
                                            {
                                                text:'OK',
                                            }
                                        ]);

                                }else{


                                    const arrayJson = [];
                                    const objResponse = JSON.parse(responseJson);

                                    arrayJson.push(objResponse.id);
                                    arrayJson.push(objResponse.nome);
                                    arrayJson.push(objResponse.password);
                                    arrayJson.push(objResponse.email);
                                    arrayJson.push(objResponse.telefone);

                                    telaHome(arrayJson);
                                }
                                
                            } 
                            }).catch((error) => {
                                console.log(error);
                                }
                            )
    }

    return(
        <ImageBackground source={background} style={estilo.imagemFundo}>
            <View style={estilo.tela}>
                <View style={estilo.boxLogin}>
                    <Image source={logo} style={estilo.logo}/>
                    <View style={estilo.inputBox}>
                        <Text style={estilo.textoLogin}>Usuário:</Text>
                        <TextInput
                        style={estilo.input}
                        textContentType="username"
                        onChangeText={(usuario)=> setEmail(usuario)}
                        maxLength={24}/>
                    </View>
                    <View style={estilo.inputBox}>
                        <Text style={estilo.textoLogin}>Senha:</Text>
                        <TextInput
                        textContentType="password"
                        onChangeText={(password) => setSenha(password)}
                        secureTextEntry={true}
                        maxLength={8}
                        style={estilo.input}/>
                    </View>
                    <TouchableOpacity onPress={FazerLogin}>
                        <View style={estilo.loginBotao}>
                            <Text style={estilo.loginBotaoTexto}>login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={estilo.cadastreBotao}> 
                    <Text>Ainda não é Cadastrado ?</Text>
                    <TouchableOpacity onPress={telaCadastro}>
                        <Text style={estilo.cadastreBotaoTexto}>Cadastre Aqui</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </ImageBackground>
    )
};

export default Login;