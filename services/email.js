import qs from 'qs';
import {Linking} from 'react-native';

export async function enviarEmail (para, assunto, mensagem, options ={}){



    const {cc} = options;

    let url = `mailto: ${para}`;

    const query = qs.stringify({

        subject: assunto,
        body: mensagem,
        cc: cc
    });

    if (query.length){

        url += `?${query}`;
    }

    const abre = await Linking.canOpenURL(url);

    if(!abre){
        throw new Error('URL não pode ser resolvida!')
    }

    return Linking.openURL(url);

}