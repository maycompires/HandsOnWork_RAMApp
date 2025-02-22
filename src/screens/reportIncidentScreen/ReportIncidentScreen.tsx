import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Adicionando o gradiente para o fundo

const ReportIncidentScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');

  // Função para enviar o relato
  const handleSubmit = () => {
    // Lógica para enviar o relato poderia ser implementada aqui
    console.log('Relato Enviado:', { name, address, phone, incidentDescription });
  };

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente moderno de fundo
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Reportar Incidente</Text>

        {/* Campo de nome */}
        <TextInput
          style={styles.input}
          placeholder="Seu Nome"
          placeholderTextColor="#757373"
          value={name}
          onChangeText={setName}
        />

        {/* Campo de endereço */}
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor="#757373"
          value={address}
          onChangeText={setAddress}
        />

        {/* Campo de telefone */}
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="phone-pad"
          placeholderTextColor="#757373"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Campo de descrição do incidente */}
        <TextInput
          style={styles.textArea}
          placeholder="Descreva o incidente"
          placeholderTextColor="#757373"
          multiline
          numberOfLines={4}
          value={incidentDescription}
          onChangeText={setIncidentDescription}
        />

        {/* Botão para enviar o relato */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar Relato</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1.5,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#333',
  },
  textArea: {
    width: '100%',
    height: 120,
    borderColor: '#fff',
    borderWidth: 1.5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 8,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#e91e63', // Cor vibrante para o botão
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReportIncidentScreen;