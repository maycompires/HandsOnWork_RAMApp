import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient'; // Gradiente para o fundo

const MapaScreen: React.FC = () => {
  // Definindo a posição inicial do mapa em Florianópolis
  const initialRegion = {
    latitude: -27.5954, // Latitude de Florianópolis
    longitude: -48.5480, // Longitude de Florianópolis
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Estado para armazenar os pontos dos círculos
  const [circleCoordinates, setCircleCoordinates] = useState<any[]>([]);
  // Estado para controlar o modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  // Função para adicionar um círculo ao mapa e um pin
  const addLocation = (e: any) => {
    const newCoordinate = e.nativeEvent.coordinate;
    setCircleCoordinates((prev) => [...prev, newCoordinate]);
    setSelectedLocation(newCoordinate);
    setModalVisible(true); // Exibe o modal com os dados
  };

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente moderno de fundo
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Áreas de Risco</Text>
        <Text style={styles.subtitle}>Locais com Relatos de Incidentes</Text>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        onPress={addLocation} // Ao clicar no mapa, adiciona um pin e círculo
      >
        {/* Círculos para marcações */}
        {circleCoordinates.map((coordinate, index) => (
          <Circle
            key={index}
            center={coordinate}
            radius={50} // Raio do círculo
            strokeColor="blue"
            fillColor="rgba(0, 0, 255, 0.3)"
          />
        ))}

        {/* Pin para a localização clicada */}
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Local Clicado" />
        )}
      </MapView>

      {/* Modal com informações da localização */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Detalhes da Localização</Text>
            <Text style={styles.modalText}>
              Latitude: {selectedLocation?.latitude}
            </Text>
            <Text style={styles.modalText}>
              Longitude: {selectedLocation?.longitude}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão para limpar os círculos */}
      <TouchableOpacity style={styles.clearButton} onPress={() => setCircleCoordinates([])}>
        <Text style={styles.clearButtonText}>Limpar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30, // Deixe o topo um pouco mais espaçoso
  },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2, // Garantir que o texto fique acima do mapa
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
    textAlign: 'center',
    marginBottom: 20,
  },
  map: {
    flex: 1, // O mapa ocupa o máximo possível de espaço
    width: '100%',
    height: '100%',
    borderRadius: 20, // Cantos arredondados
    borderWidth: 3, // Largura da borda
    borderColor: '#FFD700', // Cor da borda (amarelo)
    marginBottom: 0, // Removendo a margem inferior
  },
  clearButton: {
    backgroundColor: '#e91e63', // Cor vibrante para o botão
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  clearButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo translúcido
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MapaScreen;