import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Gradiente para o fundo

const HistoryScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente moderno de fundo
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Histórico de Incidentes</Text>
        <Text style={styles.text}>Aqui você pode ver o histórico de incidentes ou relatórios.</Text>

        {/* Botão ou Link para visualizar os incidentes */}
        <TouchableOpacity style={styles.viewButton} onPress={() => { /* Lógica para navegar ou carregar o histórico */ }}>
          <Text style={styles.viewButtonText}>Ver Incidentes</Text>
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
  text: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 20,
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: '#e91e63', // Cor vibrante para o botão
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HistoryScreen;