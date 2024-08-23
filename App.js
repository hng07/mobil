import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/Home Screen"
import FavoritesScreen from './src/screens/FavoriteScreen';
import CartScreen from './src/screens/CartScreen';
import MenuScreen from './src/screens/MenuScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitle: () => (
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 150, height: 60 }}
            resizeMode="contain" />
        ),
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{ headerTitle: 'Favoriler' }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerTitle: 'Sepetim' }}
        />
        <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        
        />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerTitle:'Giris Yap'}}
        />
        <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerTitle:'Kaydol'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '15%'
  },
});
