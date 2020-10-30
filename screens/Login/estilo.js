import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    imagemFundo: {
        width: '100%', 
        height: '100%'
      },

    tela:{
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    },
    boxLogin: {
        width:300,
        height:300,
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        flexDirection: 'row',
        //backgroundColor:'red',
        width:250,
        marginBottom:10,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    textoLogin:{
        alignItems:'flex-start',
        fontSize:16
    },
    input: {
        backgroundColor: 'rgba(131, 145, 146,0.3)',
        width:160,
        height:30,
        borderRadius:6,
        padding:6,
        fontSize:16   
    },
    logo: {
        width: 260,
        height: 60,
        marginBottom: 40
    },
    loginBotaoTexto: {
        color:"#1E8449",
        fontWeight:'700',
        fontSize: 18
    },
    loginBotao: {
        marginTop:20
    },
    cadastreBotao: {
        marginTop: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    cadastreBotaoTexto:{
        fontWeight:'700',
        color: '#212F3C',
        fontSize:17
    }
});

export default estilo;