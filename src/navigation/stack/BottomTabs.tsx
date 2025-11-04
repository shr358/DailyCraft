import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import Recommend from '../../screen/ProfileDeatils';
import Download from '../../screen/Download';
import Profile from '../../screen/Profile/Profile';
import styles from '../../screen/HomeScreen/styles';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const activeTab = state.index;

  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = activeTab === index;

        let iconSource;
        switch (route.name) {
          case 'HomeScreen':
            iconSource = require('../../assets/images/Homeicon.png');
            break;
          case 'Recommend':
            iconSource = require('../../assets/images/recommendicon.png');
            break;
          case 'Downloads':
            iconSource = require('../../assets/images/DownLoad.png');
            break;
          case 'Profile':
            iconSource = require('../../assets/images/Profileicon.png');
            break;
          default:
            iconSource = require('../../assets/images/Homeicon.png');
        }

        const onPress = () => {
          if (!isFocused) navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.navIconWrapper,
                isFocused && styles.activeNavCircle,
              ]}
            >
              <Image
                source={iconSource}
                style={[
                  styles.navIcon,
                  isFocused && { tintColor: '#fff' },
                ]}
              />
            </View>
            <Text
              style={[
                styles.navLabel,
                isFocused && { color: '#FF7B54' },
              ]}
            >
              {label === 'HomeScreen' ? 'Home' : label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Recommend" component={Recommend} />
      <Tab.Screen name="Downloads" component={Download} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
