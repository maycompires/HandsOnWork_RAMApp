import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Usando a biblioteca LinearGradient do Expo para um fundo moderno

const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente moderno de cores
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {/* Logo */}
        <Image
          source={require('../../assets/logo.png')} // Caminho para o logo
          style={styles.logo}
        />

        {/* Texto de boas-vindas */}
        <Text style={styles.welcomeText}>Aplicativo Mapeamento de Áreas de Risco</Text>
        <Text style={styles.welcomeText}>RAMApp</Text>

        {/* Botão para navegar para a tela de Login */}
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.startButtonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Para dar um espaço do topo
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 400,  // Reduzir o tamanho do logo para uma aparência mais balanceada
    height: 400,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#e91e63', // Cor vibrante para o botão
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;