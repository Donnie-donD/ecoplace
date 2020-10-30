import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    tela:{
        flex:1,
        //backgroundColor:'red',
        marginTop:40,
        justifyContent:'center',
        alignItems:"center"
    },
    boxCadastro: {

        width:300,
        height:350,
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.8)',
        alignItems: 'center',
        //justifyContent: 'center'

    },
    containerCadastrese: {
        alignItems:'center',
        marginTop:10,
        padding:10,

    },
    textoCadastro: {
        fontSize: 20,
    },
    inputBox: {
        //backgroundColor:'red',
        flexDirection: 'row',
        marginBottom:10,
        alignItems:'flex-end',
        justifyContent: 'space-between',
    },
    input: {

        backgroundColor: 'rgba(131, 145, 146,0.3)',
        width:160,
        height:30,
        borderRadius:6,
        padding:6   
    },
    inputbox2:{

        //backgroundColor: 'yellow',
        flexDirection:'row',
        paddingLeft:20 
    },
    textoCampo: {
        fontSize: 15
    },
    infoCadastro: {
        marginVertical:20
    },
    botaoCadastrar: {
        width:150,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'rgba(72, 201, 176,0.8)'
    },
    textoBotao:{
        color:'#1E8449',
        fontWeight:'700',
        fontSize:20
    },
    red: {
        backgroundColor: 'red'
    },

});

export default estilo;