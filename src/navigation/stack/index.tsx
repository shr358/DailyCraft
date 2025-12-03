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
import UnlockPremiumFeatures from '../../UnlockPremiumFeatures';
import HomeScreen from '../../screen/HomeScreen';
import Download from '../../screen/Download';
import Profile from '../../screen/Profile/Profile';
import EditProfile from '../../screen/EditProfile';
import SplashScreen from '../../screen/SplashScreen';
import SubscriptionModal from '../../components/Subscriptionmodal';
import Recommend from '../../screen/Recommend';
import BottomTabNavigator from './BottomTabs';
export type RootNavigationprop = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
 <NavigationContainer>
  {/* <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="MainTabs"> */}
<Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="SplashScreen">
<Stack.Screen name="SplashScreen" component={SplashScreen}/>
<Stack.Screen name="LoginScreen" component={LoginScreen} />
<Stack.Screen name="OtpScreen" component={OtpScreen} />
<Stack.Screen name="ChooseProfileType" component={ChooseProfileType} />
<Stack.Screen name="ChooseLanguage" component={ChooseLanguage}/>
<Stack.Screen name="BusinessProfile" component={BusinessProfile}/>
<Stack.Screen name="PersonalProfile" component={PersonalProfile}/>
<Stack.Screen name="UnlockPremiumFeatures" component={UnlockPremiumFeatures} />
<Stack.Screen name="HomeScreen" component={HomeScreen}/>
<Stack.Screen name="Download" component={Download} />
<Stack.Screen name="Profile" component={Profile} />
<Stack.Screen name="Recommend" component={Recommend} />
<Stack.Screen name="EditProfile" component={EditProfile} />
<Stack.Screen name="MainTabs" component={BottomTabNavigator} />
<Stack.Screen name="SubscriptionModal" component={SubscriptionModal} />


</Stack.Navigator>
</NavigationContainer>
  );
};

export default AppNavigator;
