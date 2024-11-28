import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient'; // Gradiente para o fundo

const MapaScreen: React.FC = () => {
  // Definindo a posição inicial do mapa em Florianópolis
  const initialRegion = {
    latitude: -27.5954, // Latitude de Florianópolis
    longitude: -48.5480, // Longitude de Florianópolis
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Estado para armazenar os pontos do polígono
  const [polygonCoordinates, setPolygonCoordinates] = useState<any[]>([]);

  // Função para adicionar coordenadas no polígono
  const addPolygonPoint = (e: any) => {
    const newCoordinate = e.nativeEvent.coordinate;
    setPolygonCoordinates((prev) => [...prev, newCoordinate]);
  };

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente moderno de fundo
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Áreas de Risco</Text>
        <Text style={styles.subtitle}>Locais com Relatos de Incidentes</Text>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
          onPress={addPolygonPoint} // Ao clicar no mapa, ele adiciona um ponto ao polígono
        >
          {/* Marker em Florianópolis */}
          <Marker coordinate={{ latitude: -27.5954, longitude: -48.5480 }} title="Florianópolis" />

          {/* Polígono vermelho, exibindo as coordenadas do usuário */}
          {polygonCoordinates.length > 2 && (
            <Polygon
              coordinates={polygonCoordinates}
              strokeColor="red"
              fillColor="rgba(255, 0, 0, 0.3)" // Cor do preenchimento do polígono
              strokeWidth={2}
            />
          )}
        </MapView>

        {/* Botão para limpar o polígono */}
        <TouchableOpacity style={styles.clearButton} onPress={() => setPolygonCoordinates([])}>
          <Text style={styles.clearButtonText}>Limpar Polígono</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '70%',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 3, // Adicionando a borda ao mapa
    borderColor: '#fff', // Cor da borda (branca para combinar com o texto)
  },
  clearButton: {
    backgroundColor: '#e91e63', // Cor vibrante para o botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MapaScreen;