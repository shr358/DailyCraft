import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Button from '../../components/Button';
import { getProfileDetails, updateProfile } from '../services/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditBusinessProfile'>;
};

const EditBusinessProfile = ({ navigation }: Props) => {
  const [_loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile_id = await AsyncStorage.getItem('profile_id');
        if (!profile_id) return;

        const response = await getProfileDetails(profile_id);

        if (response.status && response.data) {
          const data = response.data;

          setName(data.name || '');
          setEmail(data.email || '');
          setContact(data.mobile || '');
          setBio(data.bio || '');
          setSelectedImage(data.avatar || null);
        }
      } catch (error) {
        console.log('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(img => setSelectedImage(img.path));
  };

  const handleUpdate = async () => {
    try {
      const profile_id = await AsyncStorage.getItem('profile_id');

      const formData = new FormData();
      formData.append('profile_type', 'business');
      formData.append('profile_id', profile_id || '');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('mobile', contact);
      formData.append('bio', bio);

      if (selectedImage) {
        formData.append('avatar', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: `logo.jpg`,
        } as any);
      }

      const response = await updateProfile(formData);

      if (response.status) {
        Alert.alert('Success', 'Business profile updated!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView>

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Edit Business Profile</Text>
          </View>

          {/* Image */}
          <View style={styles.logoContainer}>
            <TouchableOpacity
              style={styles.logoBox}
              onPress={handleImagePick}
            >
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.logoImage} />
              ) : (
                <>
                  <Ionicons name="cloud-upload-outline" size={40} color="#999" />
                  <Text style={styles.uploadText}>Upload Business Logo</Text>
                </>
              )}
            </TouchableOpacity>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Business Name</Text>
            <TextInput value={name} onChangeText={setName} style={styles.input} />

            <Text style={styles.label}>Email</Text>
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />

            <Text style={styles.label}>Contact Number</Text>
            <TextInput value={contact} onChangeText={setContact} style={styles.input} />

            <Text style={styles.label}>Business Description</Text>
            <TextInput
              value={bio}
              onChangeText={setBio}
              style={[styles.input, styles.textArea]}
              multiline
            />
          </View>

          <Button title="Update" onPress={handleUpdate} />

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default EditBusinessProfile;
