import React from 'react';
import { Feather } from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'

import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import style from './style'

const Detail = () => {

    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params.incident
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.titulo}" com o valor de ${ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}.`

    function navigateToIncidents(){
        navigation.navigate('Incidents')
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do Caso: ${incident.titulo}`,
            recipients: [incident.email],
            body: message,
        })

    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={style.container} >

            <View style={style.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name='arrow-left' size={28} color='#e82041' />
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={[style.incidentProperty,{marginTop: 0}]}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>{incident.titulo}</Text>

                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={style.incidentValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(incident.value)}
                </Text>

            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o Dia</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato</Text>

                <View style={style.actions}>
                    <TouchableOpacity 
                    style={style.action}
                    onPress={sendWhatsApp}
                    >
                        <Text style={style.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={style.action}
                    onPress={sendMail}
                    >
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}


export default Detail;