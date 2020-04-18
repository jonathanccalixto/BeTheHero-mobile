import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const item = { id: 1, name: 'APAD', title: 'Cadelinha atropelada', "email": "contato@apad.org.br", value: 'R$ 120,00' };

  const navigation = useNavigation();
  const message = `Olá ${item.name}, estou entrando em contato pois gostaria de ajudar no caso "${item.title}" com o valor de ${item.value}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Héroi do caso: ${item.title}`,
      recipients: [item.email],
      body: message,
    });
  }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Image source={logoImg} />
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigateBack}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>{item.name}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{item.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{ item.value }</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o héroi deste caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={sendWhatsapp}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={sendMail}
          >
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}