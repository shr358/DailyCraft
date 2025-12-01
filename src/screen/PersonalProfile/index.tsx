

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Animated
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Button from '../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import { createProfile } from '../services/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



type Props = NativeStackScreenProps<RootStackParamList, 'PersonalProfile'>;

const PersonalProfile : React.FC<Props> = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [pickerVisible, setPickerVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contact: '',
    bio: '',
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
  ImagePicker.openCamera({
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
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: false,
    })
      .then(image => {
        console.log('📸 Image selected:', image);
        const imageUri = image.path.startsWith('file://')
          ? image.path
          : `file://${image.path}`;
        setSelectedImage(imageUri);
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          console.warn('Image Picker Error:', error);
        }
      });
  };


  const validateFields = () => {
    let valid = true;
    const newErrors = { name: '', email: '', contact: '', bio: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
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

    setErrors(newErrors);
    return valid;
  };


  const handleCreateProfile = async () => {
    if (!validateFields()) return;

    try {
      setLoading(true);

      const user_id = await AsyncStorage.getItem('user_id');

      const formData = new FormData();
      formData.append('profile_type', 'personal');
      formData.append('name', name.trim());
      formData.append('email', email.trim());
      formData.append('mobile', contact.trim());
      formData.append('bio', bio.trim());
      formData.append('user_id', user_id || '');

      if (selectedImage) {
        formData.append('avatar', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'avatar.jpg',
        });
      }

      console.log(' Sending profile data:', formData);

      const response = await createProfile(formData);
      console.log(' Create Profile Response:', response);

      if (response.status) {
        // Alert.alert('Success', 'Profile created successfully!');
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Error', response.message || 'Profile creation failed');
      }
    } catch (error:any) {
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
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Personal Profile</Text>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
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


      <Text style={styles.logoText}>  Please Upload {"\n"}A Profile Picture</Text>


      <View style={styles.pickButtons}>
  <TouchableOpacity
    style={styles.pickBtn} onPress={openPickerSheet}>
    <Ionicons name="image-outline" size={22} color="#FFF" />
    <Text style={styles.pickTxt}>Upload Logo</Text>
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
        <Text style={{ marginLeft: 10, fontSize: 16 }}>Open Camera</Text>
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


            <Text style={styles.label}>Enter Name</Text>
            <TextInput
              style={[styles.input, errors.name ? { borderColor: 'red' } : null]}
              placeholder=""
              placeholderTextColor="#777"
              value={name}
              onChangeText={text => setName(text.replace(/\s+/g, ' '))}
            />
            {errors.name ? (
              <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.name}</Text>
            ) : null}


            <Text style={styles.label}>Enter Email</Text>
            <TextInput
              style={[styles.input, errors.email ? { borderColor: 'red' } : null]}
              placeholder=""
              placeholderTextColor="#777"
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text.trim())}
            />
            {errors.email ? (
              <Text style={{marginLeft:5, color: 'red', fontSize: 10,fontWeight:500 }}>{errors.email}</Text>
            ) : null}


            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              style={[
                styles.input,
                errors.contact ? { borderColor: 'red' } : null,
              ]}
              placeholder=""
              placeholderTextColor="#777"
              keyboardType="numeric"
              maxLength={10}
              value={contact}
              onChangeText={text => setContact(text.replace(/[^0-9]/g, ''))}
            />
            {errors.contact ? (
              <Text style={{ marginLeft:5,color: 'red', fontSize: 10, fontWeight:500 }}>
                {errors.contact}
              </Text>
            ) : null}


            <Text style={styles.label}>Describe Yourself Briefly</Text>
            <TextInput
              style={[
                styles.input,
                styles.textlarge,
                errors.bio ? { borderColor: 'red' } : null,
              ]}
              placeholder="Type Here"
              placeholderTextColor="#777"
              multiline
              value={bio}
              onChangeText={text => setBio(text.replace(/\s{2,}/g, ' '))}
            />
            {errors.bio ? (
              <Text style={{ marginLeft:5,color: 'red', fontSize: 10, fontWeight:500 }}>{errors.bio}</Text>
            ) : null}


            <View style={styles.bottomContainer}>
              <Button
                title={loading ? 'Please wait...' : 'Continue'}
                onPress={handleCreateProfile}
              />
            </View>


            <TouchableOpacity style={styles.switchBtn}   onPress={() => navigation.navigate('BusinessProfile')}>
              <Text style={styles.switchText}>
                Switch to <Text style={styles.switchtext2}>Business Profile</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PersonalProfile;

