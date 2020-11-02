import React, {useState} from 'react';
import {View, Text, ImageBackground, TextInput, TouchableOpacity,Alert} from 'react-native';
import background from '../../assets/backCadastro.png';
import estilo from './estilo';

//principal
const Cadastro = (props) => { 
            
    const [nomeUsuario,setNome] = useState('');
    const [emailUsuario,setEmail] = useState('');
    const [telefoneUsuario,setTelefone] = useState('');
    const [senhaUsuario, setSenha] = useState('');

    const telaLogin = () => {

        props.navigation.navigate('login');
    }
    const fazerCadastro = async () => {

        await fetch('http://192.168.0.9/banco/auth/cadastro.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},

                    body: JSON.stringify({
                    nome : nomeUsuario,
                    email : emailUsuario,
                    password: senhaUsuario,
                    telefone: telefoneUsuario
                    })
                    }).then((response)=>response.json())
                        .then((responseJson) => {
                                
                        const regexResponseOK = /[s]+[u]+[c]+[e]+[s]+[s]+[o]/im

                            if(responseJson.match(regexResponseOK) != null){

                                Alert.alert(
                                    'Aviso',
                                    responseJson,
                                    [
                                        {
                                            text:'OK',
                                        }
                                    ]);
                                
                                    telaLogin()

                            }else{

                                Alert.alert(
                                    'Aviso',
                                    responseJson,
                                    [
                                        {
                                            text:'OK',
                                        }
                                    ]);
                            }
                    }).catch((error) => {
                        console.log(error);
                        }
                    )
                    
    }
    
    return(
        <ImageBackground source={background} style={{width:'100%',height:'100%'}}>
            <View style={estilo.tela}>
                <View style={estilo.boxCadastro}>
                    <View style={estilo.containerCadastrese}>
                        <Text style={estilo.textoCadastro}>Basta preencher os campos abaixo para  se cadastrar</Text> 
                    </View>
                    <View style={estilo.infoCadastro}>
                        <View style={estilo.inputBox}>
                            <Text style={estilo.textoCampo}>Nome:</Text>
                            <View style={estilo.inputbox2}>
                                <TextInput

                                    style={estilo.input}
                                    textContentType="name"
                                    maxLength={24}
                                    onChangeText={(nomeUsuario)=>setNome(nomeUsuario)}
                                />
                            </View>
                        </View>
                        <View style={estilo.inputBox}>
                            <Text style={estilo.textoCampo}>E-mail:</Text>
                            <View style={estilo.inputbox2}>
                                <TextInput

                                    style={estilo.input}
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                    maxLength={40}
                                    onChangeText={(emailUsuario)=>setEmail(emailUsuario)}
                                />
                            </View>                             
                        </View>
                        <View style={estilo.inputBox}>
                            <Text style={estilo.textoCampo}>Telefone:</Text>
                            <View style={estilo.inputbox2}>
                                <TextInput

                                    style={estilo.input}
                                    textContentType="telephoneNumber"
                                    keyboardType="phone-pad"
                                    maxLength={13}
                                    onChangeText={(telefoneUsuario)=>setTelefone(telefoneUsuario)}
                                />
                            </View>
                        </View>
                        <View style={estilo.inputBox}>
                            <Text style={estilo.textoCampo}>Senha:</Text>
                            <View style={estilo.inputbox2}>
                                <TextInput

                                    style={estilo.input}
                                    secureTextEntry={true}
                                    textContentType="password"
                                    maxLength={8}
                                    onChangeText={(senhaUsuario)=>setSenha(senhaUsuario)}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={fazerCadastro}>
                        <View>
                            <Text style={estilo.textoBotao}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )    
}

export default Cadastro;