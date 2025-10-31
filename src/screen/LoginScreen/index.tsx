
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//  import Icon from '@react-native-vector-icons/ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../components/Button';
import styles from './styles';
const { width } = Dimensions.get('window');
const LoginScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [visible, setVisible] = useState(false);


  const handleMobileChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 10) {
      setMobile(numericText);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor="#FF984F" barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 180 }}
        >
          <ImageBackground
            source={require('../../assets/images/wavyheader.png')}
            style={styles.headerBackground}
            resizeMode="cover"
          >
            <View style={styles.header}>

              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
              >

                <Ionicons name="chevron-back" size={width * 0.07} color="#FFFFFF" />

              </TouchableOpacity>

              <Text style={styles.skip}>Skip</Text>
            </View>

            <View style={styles.banner}>
              <Text style={styles.title}>Join the DailyCraft Community! 🤝</Text>
              <Text style={styles.subtitle}>
                Log in to Explore, Download & Inspire with Creative Posters.
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.inputSection}>
            <Text style={styles.label}>Mobile Number</Text>

            <View style={styles.inputBox}>

              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <CountryPicker
                  countryCode={countryCode}
                  withFilter
                  withFlag
                  withCallingCode
                  withModal
                  visible={visible}
                  onClose={() => setVisible(false)}
                  onSelect={(country) => {
                    setCountryCode(country.cca2);
                    setCallingCode(country.callingCode[0]);
                  }}
                />
                <Text style={styles.countryCode}>+{callingCode}</Text>
              </TouchableOpacity>

              <TextInput
                value={mobile}
                onChangeText={handleMobileChange}
                placeholder="Enter 10-digit number"
                keyboardType="number-pad"
                style={styles.input}
                maxLength={10}
              />

              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/callIcon.png')}
                  style={styles.callIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.helperText}>
              You will receive an SMS verification that may apply message and data rates.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={styles.checkbox}
              activeOpacity={0.7}
            >
              {checked && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            <Text style={styles.checkboxLabel}>
              <Text style={styles.link}>I accept the Terms & Conditions and </Text>
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>


          <Button
            title="Get OTP"
            onPress={() => navigation.navigate('OtpScreen')}
            disabled={!checked || mobile.length < 10}
          />

          <TouchableOpacity>
            <Text style={styles.privacyText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
