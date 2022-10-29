import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo , MaterialIcons} from '@expo/vector-icons';
import Home_screen from './Screen/Home_screen';
import Fav_screen from './Screen/Fav_screen';
import { store } from './Redux/story';
import {Provider} from 'react-redux'
export default function App() {
  const Tab =createBottomTabNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:"red",
tabBarInactiveTintColor:"grey",
}}>
          <Tab.Screen name='Home' component={Home_screen} options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="shop" size={24} color="gray" />
        )}} ></Tab.Screen>
      <Tab.Screen name='Favorite' component={Fav_screen} options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="favorite" size={24} color="gray" />
        )}}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({

});
