import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Importando ícones

// Importando as telas
import HomeScreen from '../screens/homeScreen/HomeScreen';
import LoginScreen from './../screens/login/LoginScreen';
import MapaScreen from '../screens/mapaScreen/MapaScreen';
import ReportIncidentScreen from '../screens/reportIncidentScreen/ReportIncidentScreen';
import HistoryScreen from '../screens/historyScreen/HistoryScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home" // Tela inicial
        screenOptions={{
          tabBarActiveTintColor: '#fff', // Cor ativa dos ícones
          tabBarInactiveTintColor: '#B0B0B0', // Cor inativa dos ícones
          tabBarStyle: {
            backgroundColor: '#1e2a38', // Cor de fundo da barra de navegação
            borderTopWidth: 0, // Remove borda superior
            height: 60, // Tamanho da barra de navegação
            paddingBottom: 5, // Padding inferior para ícones ficarem centrados
            shadowColor: '#000', // Sombra da barra de navegação
            shadowOffset: { width: 0, height: -5 }, // Sombra para cima
            shadowOpacity: 0.1, // Intensidade da sombra
            shadowRadius: 10, // Difusão da sombra
            elevation: 5, // Elevação para dispositivos Android (sombra)
          },
          headerShown: false, // Ocultar cabeçalho
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Mapa" 
          component={MapaScreen} 
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="ReportIncident" 
          component={ReportIncidentScreen} 
          options={{
            tabBarLabel: 'Incidente',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="History" 
          component={HistoryScreen} 
          options={{
            tabBarLabel: 'Histórico',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="history" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;