import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center'
    },

    boxOUser: {

        //backgroundColor: 'yellow',
        width: 160,
        height: 160,
        //marginTop: 110,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    
    },

    avatar: {

        width: 150,
        height: 150,
        transform: [{ rotate: "180deg" }]
    },

    txtUsuarioGreeting: {

        fontSize: 40,
        padding:30
    },

    wheel: {
        transform: [{ rotate: "180deg" }]
    },
    wrapperWheel: {
        
        alignItems:'center',
        //backgroundColor:'red',
        marginTop:100,
        
    },
    boxTxtWrapper: {
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'yellow'
    },
    txtExplicaco: {
        fontSize: 17,
        color: 'rgba(0,0,0,0.4)',
        fontStyle: 'italic'
    },
    txtScore: {
        fontSize: 25,
        fontWeight: '700',
        color:'#184d47'
    },

    wrapperContainerPromos:{

        //backgroundColor:'blue',
        marginTop:20
    },

    txtFields: {

        fontSize: 18,
        //fontWeight:'700'

    },

    containerPromos: {
        flexDirection: 'row',
        marginTop: 4,
        width: 400,
        height: 140,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d2f6c5',
        borderRadius: 10
        
    },

    promo: {

        backgroundColor: '#28df99',
        padding:8,
        margin:8,
        height:200,
        borderRadius:10,
        alignItems:'center'
        
    },

    txtPromoLoja: {

        fontSize:16,
        color:'#065446',
        fontWeight: '700'
    },

    txtPromoNome: {

        marginTop:30,
        fontSize: 20,
        color:'white'
    },

    txtPromoValidade: {
        marginTop: 20,
        color:'#065446'

    },

    txtListaVazia: {

        fontSize:23,
        color:'rgba(0,0,0,0.2)'
    },

    viewListaVazia: {

        justifyContent:'center',
    },


    modal: {
        //backgroundColor: 'rgba(0,0,0,0.8)',
        width:'100%',
        marginBottom: 30,
        height:'100%',
        
    },

    coletar: {

        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 40
    },

    coletarBox: {

        backgroundColor:'#ccedd0',
        width:120,
        height:120,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center' 
    },

    txtColetar: {

        fontSize: 50,
        fontWeight: '700',
        color: '#065446',
        padding: 10
    },

    sinaisColetar: {

        //marginTop:20,
        marginLeft:20
    },

    botaoColeta: {

        backgroundColor: '#7ea04d',
        width: 200,
        height: 50,
        margin: 5,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtBotaoColeta: {

        color: 'white'
    },

    wrapperSolicitaColeta:{
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    }

})

export default estilo;