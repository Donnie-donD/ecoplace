import React , {useState,useEffect} from 'react';
import {View,Text,Alert,Image,FlatList,Modal,Clipboard} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
 
import userPicProfile from './../../assets/profile.png';
import {enviarEmail} from './../../services/email';
import Perfil from '../../components/Perfil';
import estilo from './estilo';


const Home = ({props,route}) => {

    const usuario = route.params.arrayUser;

    const [qtd,setQtd] = useState(0);
    const [porcento,setPorcento] = useState(60)
    const [modalView, setModalView] = useState(false);

    let quantidade = qtd.toString();

    const [cupons,setCupons] = useState([


        {
            id: '1',
            nome: 'FSTA10%',
            loja: 'Renner',
            dataValidade: '03/03/2020'
          },
          {
            id: '2',
            nome: 'FSTA20%',
            loja: 'Marisa',
            dataValidade: '08/09/2020'
          },
          {
            id: '3',
            nome: 'FETA30%',
            loja: 'Riachuelo',
            dataValidade: '21/05/2020'
          },
          {
              id: '4',
              nome: 'ROPI40%',
              loja: 'Caedu',
              dataValidade: '10/08/2020'
          }

    ]);

    const bonus = () => {

        if(porcento<=100){

        }else{

            Alert.alert('Bonus alcançado')

        }

        return porcento;
    }  
    const usaCupom = (id,nome) => {

        //Quando o Usuario clicar, dar um jeito de gravar no banco que esse cupom ja foi utilizado --> atualiza desconto php

        //expo nao aceita o novo jeito de utilizar essa copia pro clipboard
        //Clipboard.setString(nome);

        Alert.alert(
            'Aviso',
            'Deseja copiar o cupom para a area de transferencia? \n\nAssim que copiado, o cupom será dado como utilizado.',
            [
                {
                    text:'Sim',
                    onPress: () => {
                        
                        Clipboard.setString(nome),
                        setCupons((cuponsAntigos)=>{
                            return cuponsAntigos.filter(cupons => cupons.id !=id);
                        })
                    }
                },
                {
                    text: 'Não'
                }
            ]);
            
    }
    const listaVazia = () => {

        return (
            <View style={estilo.viewListaVazia}>
                <Text style={estilo.txtListaVazia}>Você ainda não possui cupons...</Text>
            </View>
        )
    }
    const verModal = () => {

        if(!modalView){

            setModalView(true);
        
        }else{

            setModalView(false);

        }
    }
    const sobeUm= () =>{

        let conta = qtd;

        if(conta<10){

            conta += 1
        }

        setQtd(conta);
    }
    const desceUm = () => {

        let conta = qtd;
        conta -= 1;
        if(conta>=0){
            setQtd(conta);
        }
  
    }
    const email =()=>{

        //mensagem a ser mandada pelo email
        const mensagem = '► INFORMAÇÕES: \n\n'+'ID: '+usuario[0]+'\nNome: '+usuario[1] +'\nUsuario(a): '+usuario[3]+'\nQuantidade: ' + quantidade + ' litro(s)'+'\n\n► ENDEREÇO: \n\n' + 'Cep: ' + cep + '\nRua: ' + rua + '\nBairro: ' + bairro;

        //Ver essas informações
        const cep = '';
        const rua = '';
        const bairro = '';

        enviarEmail(

            'ecoplace_oleo@hotmail.com',
            'Gostaria de fazer uma coleta, pode verificar?',
            mensagem,
            {cc: 'daniel_al.santos@hotmail.com'},


        ).then(()=>{console.log("mensagem enviada")});
        
    }

    return(
        <View style={estilo.container}>
            <Modal

                transparent={true} 
                statusBarTranslucent={true} 
                visible={modalView} 
                animationType={'slide'} 
                onRequestClose={verModal}>

                <View style={estilo.modal}>
                    <Perfil 

                        id={usuario[0]} 
                        usuario={usuario[1]} 
                        senha={usuario[2]}
                        email={usuario[3]}
                        telefone= {usuario[4]}

                    />
                </View>
            </Modal>
            <View style={estilo.wrapperWheel}>
                <View style={estilo.boxOUser}>
                    <AnimatedCircularProgress
                        
                        style={estilo.wheel}
                        size={200}
                        width={18}
                        fill={bonus()}
                        tintColor="#28df99"
                        arcSweepAngle={180}
                        onAnimationComplete={() => console.log('')}
                        backgroundColor="#065446" 
                    >
                        {
                            ()=>(
                                    <Image
                                    style={estilo.avatar}
                                    source={userPicProfile}/>
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
                    <View style={estilo.boxTxtWrapper}>
                        <View style={{flexDirection: 'row',alignItems:'center', justifyContent:'center'}}>
                            <Text style={estilo.txtScore}>Olá, {usuario[1]}  </Text>
                            <TouchableOpacity onPress={verModal}>
                                <Icon name="settings" size={25} color="grey" />
                            </TouchableOpacity>
                        </View> 
                        <Text style={estilo.txtExplicaco}>Continue assim para conseguir</Text>
                        <Text style={estilo.txtExplicaco}> promoções bonus</Text>
                    </View>
            </View>
            <View style={estilo.wrapperContainerPromos}>
                <Text style={estilo.txtFields}>
                    Promoções
                </Text>
                <View style={estilo.containerPromos}>
                    <View>
                            <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cupons}
                            keyExtractor={(item, index) => item.id}
                            ListEmptyComponent={listaVazia()} 
                            renderItem={itemData =>
                            <TouchableOpacity onPress={()=>{usaCupom((itemData.item.id),(itemData.item.nome))}}> 
                                <View style={estilo.promo}> 
                                    <Text style={estilo.txtPromoLoja}>
                                        {itemData.item.loja}
                                    </Text>
                                    <Text style={estilo.txtPromoNome}>
                                        {itemData.item.nome}
                                    </Text>
                                    <Text style={estilo.txtPromoValidade}>
                                        {itemData.item.dataValidade}
                                    </Text>
                                    <Text>
                                        {itemData.item.mensagem}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        } 
                    />
                    </View>           
                </View>
            </View>
            <View style = {estilo.wrapperSolicitaColeta}>
                <View style={estilo.coletar}>
                        <TouchableOpacity onLongPress={()=>{setQtd(0)}}>
                            <View style={estilo.coletarBox}>
                                <Text style={estilo.txtColetar}>
                                    {qtd}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={estilo.sinaisColetar}>
                            <TouchableOpacity onPress={sobeUm}>
                                <Icon2 color={'#21bf73'} name="plus" size={50}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={desceUm}>
                                <Icon2 color={'#ff5733'} name="minus" size={50}/>
                            </TouchableOpacity>
                        </View>
                </View>
                <TouchableOpacity onPress={email}>
                    <View style={estilo.botaoColeta}>
                            <Text style={estilo.txtBotaoColeta}>Solicitar coleta</Text>
                    </View>
                </TouchableOpacity>
            </View>   
        </View>      
    )
}

export default Home;