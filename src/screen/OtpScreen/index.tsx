
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
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { verifyOtp, sendOtp } from '../services/Apiconfig';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
const { width } = Dimensions.get('window');

type OtpRouteProp = RouteProp<RootStackParamList, 'Otpscreen'>;


type OtpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Otpscreen'
>;

const OtpScreen = () => {
  const route = useRoute<OtpRouteProp>();
  const navigation = useNavigation<OtpNavigationProp>();
  const phoneNumber = route.params?.phone_number || '';
  const backendOtp = route.params?.otp || '';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<Array<TextInput | null>>([]);


  const otpValue = otp.join('');

  useEffect(() => {
    setTimer(60);
    let interval:any = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);

  }, []);


useEffect(() => {
  if (backendOtp) {
    Toast.show({
      type: 'success',
      text1: `Your OTP is 🎉 : ${backendOtp}`,
      position: 'top',
      visibilityTime: 6000,
    });
  }
}, [backendOtp]);




const handleChange = (text: string, index: number) => {
  const onlyNum = text.replace(/[^0-9]/g, '').slice(-1);
  const updatedOtp = [...otp];
  updatedOtp[index] = onlyNum;
  setOtp(updatedOtp);

  if (onlyNum !== '' && index < 5) {
    inputs.current[index + 1]?.focus();
  }


  if (onlyNum === '' && index > 0) {
    inputs.current[index - 1]?.focus();
  }
};


const handleKeyPress = (e:any, index:number) => {
  if (e.nativeEvent.key === "Backspace") {
    const updated = [...otp];


    if (updated[index] !== '') {
      updated[index] = '';
      setOtp(updated);
      inputs.current[index]?.focus();
      return;
    }


    if (index > 0) {
      updated[index - 1] = '';
      setOtp(updated);
      inputs.current[index - 1]?.focus();
    }
  }
};




  const clearOtp = () => {
    setOtp(['', '', '', '', '', '']);
    inputs.current[0]?.focus();
  };

  const handleResend = async () => {
    try {
      setError('');
      setTimer(60);
      clearOtp();

      const res = await sendOtp(phoneNumber);
      console.log('Resend OTP Response:', res);

      Alert.alert('OTP Sent', res.message || 'OTP has been resent');
    } catch (err:any) {
      console.log('Resend OTP error:', err);
      setError(err.response?.data?.message || 'Failed to resend OTP');
    }
  };


  const handleVerify = async () => {
  if (!otpValue || otpValue.length < 6) {
    setError('Please enter the 6-digit OTP');
    return;
  }

  try {
    setLoading(true);
    setError('');
    const response = await verifyOtp(phoneNumber, otpValue);
    console.log('Verify OTP Response:', response);


    if (response?.status === true) {
      const token = response?.data?.accessToken;
      const isRegistered = response?.data?.user?.is_register;


      if (token) {
        await AsyncStorage.setItem('token', token);
      }

      if (isRegistered) {

        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      } else {
        navigation.navigate('ChooseLanguage', { phone_number: phoneNumber });
      }

    } else {
      setError(response.message || 'Invalid OTP. Please try again.');
    }


  } catch (err:any) {
    console.log('Verify OTP error:', err);
    setError(err.response?.data?.message || 'Verification failed. Try again.');
  } finally {
    setLoading(false);
  }
};

  const isButtonDisabled = otpValue.length < 6 || loading;





  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            returnKeyType="done"
            textContentType="oneTimeCode"
            autoFocus={index === 0}
          />
        ))}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Text style={styles.resendText}>
        Didn’t receive code?{' '}
        <Text
          style={[styles.resendLink, timer > 0 ? { opacity: 0.6 } : null]}
          onPress={() => {
            if (timer === 0) handleResend();
          }}
        >
          {timer > 0 ? `Resend in ${timer}s` : 'Resend'}
        </Text>
      </Text>

      <TouchableOpacity
        style={[styles.verifyButton, isButtonDisabled && { opacity: 0.6 }]}
        onPress={handleVerify}
        disabled={isButtonDisabled}
        activeOpacity={0.8}
      >
        <Text style={styles.verifyButtonText}>
          {loading ? 'Verifying...' : 'Verify & Proceed'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

