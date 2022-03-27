import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FrontPage from './components/screens/FrontPage';
import PesananPage from './components/screens/PesananPage';
import PembatalanPage from './components/screens/PembatalanPage';
import LainnyaPage from './components/screens/LainnyaPage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="FrontPage"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={FrontPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color="#00579C" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={PesananPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Pesanan Saya',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color="#00579C" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={PembatalanPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Pembatalan',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" color="#00579C" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={LainnyaPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Lainnya',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="align-justify" color="#00579C" size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;