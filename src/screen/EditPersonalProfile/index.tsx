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
import Button from '../../components/Button';
import { getProfileDetails, updateProfile } from '../services/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditPersonalProfile'>;
};
const EditPersonalProfile = ({ navigation }:Props) => {
  const [_loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const load = async () => {
      const id = await AsyncStorage.getItem('profile_id');
      const res = await getProfileDetails(id || '');

      if (res.status) {
        setName(res.data.name || '');
        setBio(res.data.bio || '');
        setSelectedImage(res.data.avatar || null);
      }
      setLoading(false);
    };
    load();
  }, []);

  const pickImage = () => {
    ImagePicker.openPicker({ width: 300, height: 300, cropping: true })
      .then(img => setSelectedImage(img.path));
  };

  const update = async () => {
    try {
      const id = await AsyncStorage.getItem('profile_id');

      const formData = new FormData();
      formData.append('profile_id', id || '');
      formData.append('profile_type', 'personal');
      formData.append('name', name);
      formData.append('bio', bio);

      if (selectedImage) {
        formData.append('avatar', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: `avatar.jpg`,
        } as any);
      }

      const res = await updateProfile(formData);

      if (res.status) Alert.alert('Success', 'Personal profile updated!');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
    >
      <ScrollView>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Personal Profile</Text>
        </View>

        <View style={styles.logoContainer}>
          <TouchableOpacity style={styles.logoBox} onPress={pickImage}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.logoImage} />
            ) : (
              <>
                <Ionicons name="cloud-upload-outline" size={40} color="#999" />
                <Text style={styles.uploadText}>Upload Photo</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput value={name} onChangeText={setName} style={styles.input} />

          <Text style={styles.label}>About You</Text>
          <TextInput
            value={bio}
            onChangeText={setBio}
            style={[styles.input, styles.textArea]}
            multiline
          />
        </View>

        <Button title="Update" onPress={update} />

      </ScrollView>
    </ImageBackground>
  );
};

export default EditPersonalProfile;
