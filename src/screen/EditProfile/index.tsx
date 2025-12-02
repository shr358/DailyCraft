
import React, { useState, useEffect } from 'react';
import { View,Text,TextInput,TouchableOpacity,ScrollView,Image,ImageBackground,Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Button from '../../components/Button';
import { getProfileDetails } from '../services/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { updateProfile } from '../services/Apiconfig';
type EditProfileProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;
};

const EditProfile = ({ navigation } : EditProfileProps) => {
  const [_loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [_profiletype, setProfileType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [bio, setBio] = useState('');
  const [address,setAddress] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile_id = await AsyncStorage.getItem('profile_id');
        if (!profile_id) {
          Alert.alert('Error', 'Profile not found');
          navigation.goBack();
          return;
        }

        const response = await getProfileDetails(profile_id);
        console.log('Profile Details:', response);

        if (response.status && response.data) {
          const data = response.data;
          setProfileType(data.profile_type || '');
          setName(data.name || '');
          setEmail(data.email || '');
          setContact(data.mobile || '');
          setBio(data.bio || '');
          setAddress(data.address || '');
          setSelectedImage(data.avatar || null);
        } else {
          Alert.alert('Error', response.message || 'Unable to fetch profile details');
        }
      } catch (error) {
        console.log('Error loading profile:', error);
        Alert.alert('Error', 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigation]);

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    })
      .then(image => setSelectedImage(image.path))
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          console.warn('Image Picker Error:', error);
        }
      });
  };

const handleUpdateProfile = async () => {
  try {
    const profile_id = await AsyncStorage.getItem('profile_id');
    if (!profile_id) {
      Alert.alert('Error', 'Profile not found');
      return;
    }

    const formData = new FormData();
    formData.append('profile_id', profile_id);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', contact);
    formData.append('bio', bio);
    formData.append('address',address);
    formData.append('profile_type', _profiletype);

    if (selectedImage) {

      formData.append('avatar', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: `avatar_${Date.now()}.jpg`,
      } as any);
    }

    setLoading(true);
    const response = await updateProfile(formData);

    if (response.status) {
      Alert.alert('Success', 'Profile updated successfully');
    } else {
      Alert.alert('Error', response.message || 'Failed to update profile');
    }

  } catch (error) {
    console.log('Update Profile Error:>>>>>>', error);
    Alert.alert('Error', 'Something went wrong while updating profile');
  } finally {
    setLoading(false);
  }
};


  return (
    <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Edit Profile</Text>
          </View>


          <View style={styles.logoContainer}>
            <TouchableOpacity
              style={[
                styles.logoBox,
                selectedImage && { borderWidth: 0 },
              ]}
              onPress={handleImagePick}
              activeOpacity={0.8}
            >
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.logoImage} />
              ) : (
                <>
                  <Ionicons name="cloud-upload-outline" size={40} color="#999" />
                  <Text style={styles.uploadText}>Please Upload A Business Logo</Text>
                  <TouchableOpacity
                    style={styles.uploadBtn}
                    onPress={handleImagePick}
                  >
                    <Ionicons name="image-outline" size={20} color="#fff" />
                    <Text style={styles.uploadBtnText}> Upload Logo</Text>
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
          </View>


          <View style={styles.formContainer}>
            <Text style={styles.label}>Shop/ Business Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter name"
              placeholderTextColor="#777"
            />

            <Text style={styles.label}>Enter Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Here"
              placeholderTextColor="#777"
            />

            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              style={styles.input}
              value={contact}
              onChangeText={setContact}
              placeholder="Enter contact"
              placeholderTextColor="#777"
            />

            <Text style={styles.label}>Describe Yourself Briefly</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={bio}
              onChangeText={setBio}
              placeholder="Type Here"
              multiline
              placeholderTextColor="#777"
            />

             <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={address}
              onChangeText={setAddress}
              placeholder="Enter Here"
              placeholderTextColor="#777"
            />
          </View>


          <View style={styles.bottomContainer}>
              <Button title="Continue" onPress={handleUpdateProfile} />
          </View>


          <TouchableOpacity style={styles.switchContainer}>
            <Text style={styles.switchText}>
              Switch to <Text style={styles.switchHighlight}>Personal Profile</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default EditProfile;
