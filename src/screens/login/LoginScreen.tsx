import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Adicionando o LinearGradient para um fundo moderno
import { NavigationProp } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente moderno de fundo
      style={styles.container}
    >
      <SafeAreaView style={styles.innerContainer}>
        <Text style={styles.title}>Entre com a sua Conta</Text>

        {/* Input de email */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          placeholderTextColor="#757373" // Cor do texto de placeholder
        />

        {/* Input de senha */}
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor="#757373" // Cor do texto de placeholder
        />

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Opções de navegação para "Registrar" e "Esqueceu sua senha?" */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.optionText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.optionText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#fff', // Fundo branco nos campos de input
  },
  button: {
    width: '80%',
    backgroundColor: '#e91e63', // Cor vibrante para o botão
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  optionText: {
    fontSize: 16,
    color: '#fff', // Texto branco para os links
    marginTop: 10,
    textDecorationLine: 'underline', // Sublinhado nos links
  },
});

export default LoginScreen;