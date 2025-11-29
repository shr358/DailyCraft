

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Animated,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Button from '../../components/Button';
import ImageCropPicker from 'react-native-image-crop-picker';
import { createProfile } from '../services/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type BusinessProfileProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BusinessProfile'>;
};

const BusinessProfile = ({ navigation }: BusinessProfileProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [pickerVisible, setPickerVisible] = useState(false);
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    shopName: '',
    email: '',
    contact: '',
    bio: '',
    address: '',
  });


 const slideAnim = useState(new Animated.Value(0))[0];
const openPickerSheet = ()=>{
  setPickerVisible(true);
  Animated.timing(slideAnim , {
    toValue:1,
    duration:250,
    useNativeDriver:true,
  }).start();
};

const closePickerSheet = () =>{
  Animated.timing(slideAnim,{
toValue:0,
duration:200,
useNativeDriver:true,
  }).start(()=> setPickerVisible(false));
};


  const sheetTranslateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const handleCameraPick = () => {
    ImageCropPicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: false,
    })
      .then(image => {
        const imageUri = image.path.startsWith('file://')
          ? image.path
          : `file://${image.path}`;
        setSelectedImage(imageUri);
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          console.warn('Camera Error:', error);
        }
      });
  };

  const handleImagePick = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          console.warn('Image Picker Error:', error);
        }
      });
  };

  const validateFields = () => {
    let valid = true;
    const newErrors = { shopName: '', email: '', contact: '', bio: '', address: '' };

    if (!shopName.trim()) {
      newErrors.shopName = 'Business name is required';
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/@gmail\.com$/.test(email.trim().toLowerCase())) {
      newErrors.email = 'Email must include @gmail.com';
      valid = false;
    }
    if (!/^\d{10}$/.test(contact.trim())) {
      newErrors.contact = 'Enter valid 10-digit number';
      valid = false;
    }
    if (!bio.trim()) {
      newErrors.bio = 'Bio cannot be empty';
      valid = false;
    }
    if (!address.trim()) {
      newErrors.address = 'Address cannot be empty';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleCreateProfile = async () => {
    if (!validateFields()) return;

    try {
      setLoading(true);
      const user_id = await AsyncStorage.getItem('user_id');

      const formData = new FormData();
      formData.append('profile_type', 'business');
      formData.append('name', shopName);
      formData.append('email', email);
      formData.append('mobile', contact);
      formData.append('bio', bio);
      formData.append('address', address);
      formData.append('user_id', user_id || '');

      if (selectedImage) {
        formData.append('avatar', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'avatar.jpg',
        });
      }

      const response = await createProfile(formData);

      if (response.status) {
        Alert.alert('Success', 'Business profile created successfully!');
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Error', response.message || 'Profile creation failed');
      }
    } catch (error: any) {
      console.error(' Create Profile Error:', error);
      Alert.alert('Error', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Business Profile</Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 40 }}>


            <TouchableOpacity style={styles.logoBox} activeOpacity={0.9} onPress={openPickerSheet}>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.fullImage}
                  resizeMode="cover"
                />
              ) : (
                <View style={styles.emptyBox}>
                  <Image
                    source={require('../../assets/images/uploadicon.png')}
                    style={styles.uploadimageicon}
                    resizeMode="contain"
                  />
<View style= {{justifyContent:'center',alignSelf:'center'}}>
                  <Text style={styles.logoText}>Please Upload A Profile Picture</Text>

</View>
                    <View style={styles.pickButtons}>
                    <TouchableOpacity
                      style={styles.pickBtn}
                      onPress={openPickerSheet}
                    >
                      <Ionicons name="image-outline" size={22} color="#FFF" />
                      <Text style={styles.pickTxt}>Gallery</Text>
                    </TouchableOpacity>
                  </View>
                  <Modal
                    visible={pickerVisible}
                    transparent
                    animationType="fade"
                    onRequestClose={closePickerSheet}
                  >
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={closePickerSheet}
                      style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Animated.View
                        style={{
                          backgroundColor: '#fff',
                          paddingTop: 15,
                          paddingBottom: 30,
                          paddingHorizontal: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                          transform: [{ translateY: sheetTranslateY }],
                        }}
                      >
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: '600',
                            marginBottom: 15,
                          }}
                        >
                          Select Image
                        </Text>

                        <TouchableOpacity
                          style={{
     width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderColor: '#ddd',
      borderRadius: 10,
      marginBottom: 10,
}}
                          onPress={() => {
                            closePickerSheet();
                            handleCameraPick();
                          }}
                        >
                          <Ionicons name="camera-outline" size={22} color="#000" />
                          <Text style={{ marginLeft: 10, fontSize: 16 ,justifyContent:'center'}}>Open Camera</Text>
                        </TouchableOpacity>
                  
                  
                        <TouchableOpacity
                          style={{
width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderColor: '#ddd',
      borderRadius: 10,
}}
                          onPress={() => {
                            closePickerSheet();
                            handleImagePick();
                          }}
                        >
                          <Ionicons name="images-outline" size={22} color="#000" />
                          <Text style={{ marginLeft: 10, fontSize: 16 }}>Choose From Gallery</Text>
                        </TouchableOpacity>
                  
                  
                        <TouchableOpacity
                          onPress={closePickerSheet}
                          style={{
                            marginTop: 12,
                            paddingVertical: 12,
                            backgroundColor: '#f2f2f2',
                            borderRadius: 10,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 16,
                              fontWeight: '600',
                            }}
                          >
                            Cancel
                          </Text>
                        </TouchableOpacity>
                      </Animated.View>
                    </TouchableOpacity>
                  </Modal>
                </View>
              )}
            </TouchableOpacity>


            <Text style={styles.label}>Shop / Business Name</Text>
            <TextInput
              style={[styles.input, errors.shopName ? { borderColor: 'red' } : null]}
              value={shopName}
              onChangeText={text => setShopName(text.replace(/\s+/g, ' '))}
            />
            {errors.shopName ? ( <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.shopName}</Text> ) : null}

            <Text style={styles.label}>Enter Email</Text>
            <TextInput
              style={[styles.input, errors.email ? { borderColor: 'red' } : null]}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text.trim())}
            />
            {errors.email ? ( <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.email}</Text>) : null}

            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              style={[styles.input, errors.contact ? { borderColor: 'red' } : null]}
              keyboardType="numeric"
              maxLength={10}
              value={contact}
              onChangeText={text => setContact(text.replace(/[^0-9]/g, ''))}
            />
            {errors.contact ? ( <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.contact}</Text> ): null}

            <Text style={styles.label}>Describe Your Business</Text>
            <TextInput
              style={[styles.input, styles.textlarge, errors.bio ? { borderColor: 'red', } : null]}
              multiline
              value={bio}
              onChangeText={text => setBio(text.replace(/\s{2,}/g, ' '))}
            />
            {errors.bio ? ( <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.bio}</Text> ) : null}

            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.input, styles.textlarge, errors.address ? { borderColor: 'red'  } : null]}
              multiline
              value={address}
              onChangeText={text => setAddress(text.replace(/\s{2,}/g, ' '))}
            />
            {errors.address ? ( <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.address}</Text> ) : null}

            <View style={styles.bottomContainer}>
              <Button
                title={loading ? 'Please wait...' : 'Continue'}
                onPress={handleCreateProfile}
              />
            </View>

            <TouchableOpacity style={styles.switchBtn}  onPress={() => navigation.navigate('PersonalProfile')}>
              <Text style={styles.switchText}>
                Switch to <Text style={styles.switchtext2}>Personal Profile</Text>
              </Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BusinessProfile;
