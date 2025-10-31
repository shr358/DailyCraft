
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const { width } = Dimensions.get('window');

const OtpScreen = ({ navigation }) => {

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={width * 0.07} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <Text style={styles.title}>Welcome to the Creative Circle! 🤝</Text>
          <Text style={styles.subtitle}>
            Enter the  <Text style={{ color: '"#fff"', fontWeight: '600' }}>OTP</Text> to confirm your spot in the DailyCraft community.
          </Text>
        </View>
      </ImageBackground>


      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={styles.otpBox}
            keyboardType=""
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>


      <Text style={styles.resendText}>
        Didn’t receive code? <Text style={styles.resendLink}>Resend</Text>
      </Text>


      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate('ChooseProfileType')}
        activeOpacity={0.8}
      >
        <Text style={styles.verifyButtonText}>Verify & Proceed</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
