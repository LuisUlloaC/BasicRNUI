import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/login";
import ChatScreen from "./src/chatScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Iniciar Sesión'}} />
            <Stack.Screen name="Chat Demo" component={ChatScreen} options={{title: 'Chat'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

