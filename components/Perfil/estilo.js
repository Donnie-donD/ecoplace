import {StyleSheet} from 'react-native';


const estilo = StyleSheet.create({

    container: {
        alignItems:'center',
        justifyContent:'flex-end',
        width:'100%',
        height: '100%',
        
    },
    modal:{

        //backgroundColor: '#263f44',
        //backgroundColor: 'rgba(0,0,0,0.9)',
       
        backgroundColor:'#ebecf1',
        width:500,
        height:450,
        justifyContent:'center',
        alignItems:'center',
        borderTopStartRadius:100,
        borderTopEndRadius: 100,
        
    },   
    txtResults: {

        fontSize: 15,
        color:'#065446',
        fontWeight: '700'
    },
    dados: {

        //backgroundColor: 'green',
        width: 400,
        height: 320,
        alignItems:'center',
    },
    informacoes:{
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        height: 100,
    },
    txtInfo: {

        fontSize: 25,
        fontWeight: '700',
        //color:'white'
    },
    subArea: {
        fontStyle:'italic',
        //color: 'white'
    },
    usuario: {

        //backgroundColor:'yellow',
        //marginTop:20,
        padding:10,
        justifyContent: 'center',
        alignItems:'center',

    },
    endereco: {

        //backgroundColor: 'blue',
        //marginTop:10,
        padding:10
    },
    header: {
        fontSize: 25,
        fontWeight: '700',
    },
    boxHeader:{
        flexDirection:'row',
        alignItems: 'center'
    },
    campos: {

        fontSize: 16,
        color: 'white'
    },
    boxCampo: {
        
        backgroundColor:'#065446',
        //backgroundColor: '#158467',
        flexDirection: 'row',
        alignItems: 'center',
        width:380,
        height: 35,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'space-between',
        margin: 1
    },
    boxCampo2:{
        backgroundColor: '#28df99',
        flexDirection: 'row',
        width: 290,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        padding: 8
    },
    boxCampoEstatico:{
        backgroundColor:'rgba(57, 218, 161,0.7)',
        flexDirection: 'row',
        width: 290,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        padding: 8
    },
    botaoGravar:{

        backgroundColor: '#065446',
        width: 150,
        height: 40,
        borderRadius: 100,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        //marginTop: 10
    },
    txtBotaoGravar: {
        color: 'white'
    },
    botaoCadeado: {

        backgroundColor: 'white',
        borderRadius: 100,
        margin: 10,
        width: 40,
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wapper: {

        //backgroundColor: 'white',
        height: 205,
        padding:5,
        margin: 1,
        borderRadius: 15
    },
})

export default estilo;