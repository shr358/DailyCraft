
import React, { useState, useEffect } from 'react';
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
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import { sendOtp } from '../services/Apiconfig';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';
import { deviceWidth } from '../../utils/dimensions';
import Toast from 'react-native-toast-message';

const { width } = Dimensions.get('window');
const indianMobileRegex = /^(?!.*(\d)\1{9})[6-9]\d{9}$/;

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [checked, setChecked] = useState(false);
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const isFormValid = indianMobileRegex.test(mobile) && checked;


useEffect(() => { const checkLoginStatus = async () => {
   try {
     const token = await AsyncStorage.getItem('token');
    if (token) {
       console.log('User already logged in');
       navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
        return;
      } } catch (err)
      {
         console.log('Error checking login:', err);
        } finally {
          setInitialLoading(false);
        } };
        checkLoginStatus();
      }, []);

  const handleMobileChange = (text:string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 10) setMobile(numericText);
    if (numericText.length === 10 && !indianMobileRegex.test(numericText)) {
      setError('Please enter a valid Indian mobile number');
    } else {
      setError('');
    }
  };

  const handleGetOTP = async () => {
    if (!mobile.trim()) {
      setError('Please enter mobile number');
      return;
    }
    if (!indianMobileRegex.test(mobile)) {
      setError('Please enter a valid Indian mobile number');
      return;
    }
    if (!checked) {
      setError('Please accept Terms & Conditions');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await sendOtp(mobile);
      console.log('OTP Response:', res);

       Toast.show({
        type: 'success',
        text1: `OTP has been sent to +91${mobile}`,
        position: 'top',
        visibilityTime: 3000,
      });

      navigation.navigate('OtpScreen', { phone_number: mobile, otp: res.otp });
        // navigation.navigate('MainTabs');
    } catch (err:any) {
      console.log('Send OTP error:', err);
      setError(
        err.response?.data?.message || 'Failed to send OTP. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };


  if (initialLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <ActivityIndicator size="large" color="#FF984F" />
        <Text style={{ marginTop: 12, fontSize: 16, color: '#333' }}>
          Checking login status...
        </Text>
      </View>
    );
  }



return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF0ED' }}>
  <KeyboardAvoidingView
    enabled={true}
    behavior={Platform.OS === "ios" ? "padding" : 'height'}
    keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#FF984F" barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 260 }}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets={true}
          nestedScrollEnabled={true}
        >
          <ImageBackground
            source={require('../../assets/images/wavyheader.png')}
            style={styles.headerBackground}
            resizeMode="cover"
          >


            <View style={styles.banner}>
              <Text style={styles.title}>Join the DailyCraft Community! 🤝</Text>
              <Text style={styles.subtitle}>
                Log in to Explore, Download & Inspire with Creative Posters.
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.inputSection}>
            <Text style={styles.label}>Mobile Number</Text>

            <View
              style={[
                styles.inputBox,
                error ? { borderColor: "red", borderWidth: 1 } : null,
              ]}
            >
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{ flexDirection: "row", alignItems: "center" ,paddingRight: 8}}
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




<View
  style={{
        width: 1,
    height: "60%",
    backgroundColor: "#ccc",
    marginHorizontal: 8,
    marginRight: 10,
    // marginLeft:10,
    alignSelf: "center",
  }}
/>

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
                  source={require('../../assets/images/logincallicon.png')}
                  style={styles.callIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Text style={styles.helperText}>
  You will receive an SMS verification that may apply{"\n"}
  message and data rates.
</Text>

          </View>
        {/* </ScrollView> */}


        <View style={styles.bottomContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setChecked(!checked)}
              style={[
                styles.checkbox,
                { backgroundColor: checked ? "#FF8C32" : "#FFFFFF" },
              ]}
              activeOpacity={0.7}
            >
              {checked && (

                <Ionicons
  name="checkmark-sharp"
  size={deviceWidth * 0.05}
  color="#FFF"
  style={{ marginTop: 1, transform: [{ scaleX: 1.32 }, { scaleY: 1.32}], }}
/>

              )}
            </TouchableOpacity>

            <Text style={styles.checkboxLabel}>
              <Text style={styles.link}>I accept the Terms & Conditions and </Text>
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>

          <Button
            title={loading ? "Sending..." : "Get OTP"}
            onPress={handleGetOTP}
            disabled={!isFormValid || loading}
              textStyle={{ fontSize: 32,
    fontWeight: '900',  }}
          />

          <TouchableOpacity>
            <Text style={styles.privacyText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>

    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  </SafeAreaView>
);


};
export default LoginScreen;
