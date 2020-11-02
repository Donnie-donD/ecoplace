import React, {useState,useEffect}from 'react';
import {

    View,
    Text,
    StyleSheet, 
    TouchableOpacity,
    Alert,TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback, 
    Keyboard,
    ScrollView,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import estilo from './estilo';

const Perfil = (props) => {

    useEffect(() => {

        fetch ('http://192.168.0.9/banco/auth/consulta/user.php',{
            method: 'POST',
            headers: {
                'Accept' : ' application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id: props.id
            })
        }).then(response => response.json())
        .then((responseJSON) => {
            
            if(responseJSON != ""){

                console.log(responseJSON);

                setTelefone(responseJSON.telefone)
                setSenha(responseJSON.password)
                setUsuario(responseJSON.nome)
                setEmail(responseJSON.email)
            
                setEstado(responseJSON.estado)
                setCidade(responseJSON.cidade)
                setCep(responseJSON.cep)
                setRua(responseJSON.rua)
                
            }
        
        })
        .catch((error)=>{

            console.log(error);
        })
        
    },[]);

    //habilitar edição dos campos
    const [editarCampo, setEditarCampo] = useState(false);
    const [cadeado, setCadeado] = useState("lock");

    //Dados atuais
    const [telefone, setTelefone] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [cidade,setCidade] = useState('');
    const [estado,setEstado]=useState('')
    const [cep,setCep] = useState('');
    const [rua,setRua] = useState('');
    
    //Dados novos do Usuario
    const [telefoneNovo, setTelefoneNovo] = useState("");
    const [emailNovo, setEmailNovo] = useState("");
    const [senhaNova, setSenhaNova] = useState("");

    //Dados novos do Usuario - endereço
    const [cidadeNova, setCidadeNova] = useState("")
    const [estadoNovo, setEstadoNovo] = useState("")
    const [cepNovo, setCepNovo] = useState("")
    const [ruaNova, setRuaNova] = useState("")
    
    
    const atualizar=()=>{

        fetch('http://192.168.0.9/banco/auth/update.php',{
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({

                id:props.id,
                email:emailNovo,
                senhaAntiga: senha,
                senhaNova: senhaNova,
                telefone: telefoneNovo,
                cep: cepNovo,
                rua: ruaNova,
                cidade: cidadeNova,
                estado:estadoNovo
                

            }) 
        }).then((response)=>response.json())
            .then((json)=>{
                
                //console.log(json)
                Alert.alert(
                    'Aviso',
                    json,
                    [
                        {
                            text:'OK',
                        }
                    ]);
            
            })
            .catch((error)=>{
                console.error(error);
            })
    }
    const habilitarEdicao =()=>{

            if(!editarCampo){

                setCadeado("lock-open");
                setEditarCampo(true);

            }else {

                setCadeado("lock");
                setEditarCampo(false);
            }
    }

    return(
        <KeyboardAvoidingView style={estilo.avoid} behavior={'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={estilo.container}>
                    <View style={estilo.modal}>
                        <View style={estilo.dados}>
                            <View style={estilo.informacoes}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={estilo.txtInfo}>Bem vindo a sua area </Text>
                                    <Text style={estilo.subArea}>Clique no cadeado para habilitar a edição</Text>
                                    <View style={estilo.botaoCadeado}>
                                        <TouchableOpacity onPress={habilitarEdicao}>
                                            <Icon name={cadeado} size={25} color="#3e978b" />
                                        </TouchableOpacity>
                                    </View>       
                                </View> 
                            </View>
                            <View>
                                <View style={estilo.wapper}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        <View style={estilo.boxHeader}>
                                            <Text style={estilo.header}>Usuário </Text>
                                            <Icon name={'people'} size={25} color="#3e978b" />
                                        </View>
                                        <View style={estilo.usuario}>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>Usuário: </Text>
                                                    <View style={estilo.boxCampoEstatico}>
                                                        <Text style={estilo.txtResults,{color:'rgba(0,0,0,0.7)'}}>{usuario}</Text>
                                                    </View>
                                            </View>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>e-mail: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={email}
                                                            onChangeText={(insertEmail)=> setEmailNovo(insertEmail)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>senha: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={senha}
                                                            onChangeText={(insertSenha)=> setSenhaNova(insertSenha)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>Telefone: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={telefone}
                                                            onChangeText={(insertTelefone)=> setTelefoneNovo(insertTelefone)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={estilo.boxHeader}>
                                                <Text style={estilo.header}>Endereço </Text>
                                                <Icon name={'add-location'} size={25} color="#3e978b" />
                                        </View>
                                        <View style={estilo.usuario}>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>Cep: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={cep}
                                                            onChangeText={(insertCep)=> setCepNovo(insertCep)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>Rua: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={rua}
                                                            onChangeText={(insertRua)=> setRuaNova(insertRua)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>Cidade: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={cidade}
                                                            onChangeText={(insertCidade)=> setCidadeNova(insertCidade)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                            <View style={estilo.boxCampo}>
                                                <Text style={estilo.campos}>Estado: </Text>
                                                    <View style={estilo.boxCampo2}>
                                                        <TextInput
                                                            style={estilo.txtResults}
                                                            placeholderTextColor={'rgba(0,0,0,0.2)'}
                                                            placeholder={estado}
                                                            onChangeText={(insertEstado)=> setEstadoNovo(insertEstado)} 
                                                            editable={editarCampo}  
                                                        /> 
                                                    </View>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        <View style={{margin:10}}>
                            <TouchableOpacity style ={estilo.botaoGravar} onPress={atualizar}>
                                <Text style={estilo.txtBotaoGravar}>Atualizar</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Perfil;