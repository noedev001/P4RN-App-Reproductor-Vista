/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/main-screens/HomeScreen';
import Onborning from '../screens/onborning/Onborning';
import PlayerMusic from '../screens/main-screens/PlayerMusic';



import AsyncStorage from '@react-native-async-storage/async-storage';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();



const RootNavigationStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

    React.useEffect(() => {
        AsyncStorage.getItem('alreadyLaunch').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunch', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });

        /* GoogleSignin.configure({
            webClientId: '77923328665-cm3a946f21dl1cpg1gvg6cudl44ho1c7.apps.googleusercontent.com',
            offlineAccess: true,
        }); */
    }, []);

    if (isFirstLaunch == null) {
        return null;
    } else if (isFirstLaunch == true) {
        return (

            <Stack.Navigator>
                <Stack.Screen
                    name="Onboarning"
                    component={Onborning}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PlayerMusic"
                    component={PlayerMusic}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>

        );
    } else {
        return (<Stack.Navigator>
            <Stack.Screen
                name="Onboarning"
                component={Onborning}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PlayerMusic"
                component={PlayerMusic}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>);
    }
};

export default RootNavigationStack;