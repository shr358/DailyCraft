import React, { useEffect } from 'react';
import { View, Image} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

type SplashNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.splashBox, { flex: 1 }]}>
      <View style={styles.rowBox}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/SplashScreen.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>


      </View>

    </View>
  );
};

export default SplashScreen;
