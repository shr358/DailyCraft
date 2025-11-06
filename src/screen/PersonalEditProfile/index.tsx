import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import Button from '../../components/Button';

const PersonalEditProfile = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>


        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.logoBox}
            onPress={handleImagePick}
            activeOpacity={0.8}>
            <View style={styles.uploadIconContainer}>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.logoImage}
                  resizeMode="cover"
                />
              ) : (
                <Ionicons name="cloud-upload-outline" size={40} color="#999" />
              )}
            </View>
            <Text style={styles.uploadText}>Please Upload A Business Logo</Text>

            <TouchableOpacity
              style={styles.uploadBtn}
              onPress={handleImagePick}>
              <Ionicons name="image-outline" size={20} color="#fff" />
              <Text style={styles.uploadBtnText}> Upload Logo</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>


        <View style={styles.formContainer}>
          <Text style={styles.label}>Shop/ Business Name</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#777"
          />

          <Text style={styles.label}>Enter Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Here"
            placeholderTextColor="#777"
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Select"
            placeholderTextColor="#777"
          />

          <Text style={styles.label}>Describe Yourself Briefly</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Type Here"
            multiline
            placeholderTextColor="#777"
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Type Your Address Here"
            multiline
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.bottomContainer}>
          <Button title="Continue" onPress={() => navigation.navigate('LoginScreen')} />
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

export default PersonalEditProfile;
