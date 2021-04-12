import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    Dashboard,
    
} from "./src/screens";
import History from "./src/screens/History"
import MakeReservation from "./src/screens/MakeReservation"

import ModifyReservation from "./src/screens/ModifyReservation"

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen}
                    />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen
               
                                name="MakeReservation"
        
                                       component={MakeReservation}
                   
                    />
                    <Stack.Screen
                
                               name="ModifyReservation"
         
                                      component={ModifyReservation}
                   
                    />
                    <Stack.Screen name="History" component={History} />
                    <Stack.Screen
                        name="ResetPasswordScreen"
                        component={ResetPasswordScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
