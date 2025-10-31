import React from 'react';
import { createNativeStackNavigator , NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import OtpScreen from '../../screen/OtpScreen';
import LoginScreen from '../../screen/LoginScreen';
import ChooseProfileType from '../../screen/ChooseProfile';
import ChooseLanguage from '../../screen/ChooseLanguage';
import BusinessProfile from '../../screen/BusinessProfile';
import PersonalProfile from '../../screen/PersonalProfile';
export type RootNavigationprop = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
   <Stack.Screen name="ChooseProfileType" component={ChooseProfileType} />
<Stack.Screen name="ChooseLanguage" component={ChooseLanguage}/>
<Stack.Screen name="BusinessProfile" component={BusinessProfile}/>
<Stack.Screen name="PersonalProfile" component={PersonalProfile}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default AppNavigator;
