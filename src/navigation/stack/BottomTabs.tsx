import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import Recommend from '../../screen/Recommend';
import Download from '../../screen/Download';
import Profile from '../../screen/Profile/Profile';
import styles from '../../screen/HomeScreen/styles';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icons = {
          Home: require('../../assets/images/Homeicon.png'),
          Recommended: require('../../assets/images/recommendicon.png'),
          Downloads: require('../../assets/images/DownLoad.png'),
          Profile: require('../../assets/images/Profileicon.png'),
        };

        return (
          <TouchableOpacity
            key={label}
            onPress={() => navigation.navigate(route.name)}
            style={styles.navItem}
          >
            <View
              style={[
                styles.navIconWrapper,
                isFocused && styles.activeNavCircle,
              ]}
            >
              <Image
                source={icons[route.name]}
                style={[
                  styles.navIcon,
                  isFocused && { tintColor: '#fff' },


                ]}
                resizeMode="contain"
              />
            </View>


            <Text
              style={[
                styles.navLabel,
                { color: isFocused ? '#FF984F'  : '#252525' },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};



const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recommended" component={Recommend} />
      <Tab.Screen name="Downloads" component={Download} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
