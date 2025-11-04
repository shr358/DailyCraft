

import React, { useState, useRef, useEffect } from 'react';
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
  const [otp, setOtp] = useState(['', '', '', '','','']);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(0);
  const inputs = useRef([]);


  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);


    if (error) setError('');

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const otpValue = otp.join('');


  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);


  const handleResend = () => {
    setOtp(['', '', '', '','','']);
    setError('');
    setTimer(60);
  };


  const validateOtp = () => {
    if (!otpValue) {
      setError('Please enter OTP');
      return false;
    }
    if (otpValue.length < 6) {
      setError('Please enter 4-digit OTP');
      return false;
    }
    if (otpValue !== '123456') {
      setError('Invalid OTP. Please try again.');
      return false;
    }
    return true;
  };


  const handleVerify = () => {
    const isValid = validateOtp();
    if (isValid) {
      setError('');
      navigation.navigate('ChooseLanguage');
    }
  };


  const isButtonDisabled = otpValue.length < 6;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={require('../../assets/images/wavyheader.png')}
        style={styles.headerBackground}
        resizeMode="cover">
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={width * 0.07} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <Text style={styles.title}>Welcome to the Creative Circle! 🤝</Text>
          <Text style={styles.subtitle}>
            Enter the <Text style={{ color: '#fff', fontWeight: '600' }}>OTP</Text> to confirm your spot in the DailyCraft community.
          </Text>
        </View>
      </ImageBackground>


      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={[styles.otpBox, error ? { borderColor: 'red' } : null]}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>


      {error ? <Text style={styles.errorText}>{error}</Text> : null}


      <Text style={styles.resendText}>
        Didn’t receive code?{' '}
        <Text style={styles.resendLink} onPress={handleResend}>
          {timer > 0 ? `Resend in ${timer}s` : 'Resend'}
        </Text>
      </Text>
 

      <TouchableOpacity
        style={[styles.verifyButton, isButtonDisabled && { opacity: 0.5 }]}
        onPress={handleVerify}
        activeOpacity={0.8}
        disabled={isButtonDisabled}>
        <Text style={styles.verifyButtonText}>Verify & Proceed</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
