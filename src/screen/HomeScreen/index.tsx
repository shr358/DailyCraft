

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileDetails } from '../services/Apiconfig';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => setModalVisible(!isModalVisible);
  const profiles = [1, 2, 3];


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileId = await AsyncStorage.getItem('profile_id');
        if (!profileId) {
          console.log(' No profile_id found in AsyncStorage');
          setLoading(false);
          return;
        }

        const response = await getProfileDetails(profileId);
        if (response?.status && response.data) {
          setProfileData(response.data);
        } else {
          console.log(' Invalid profile response:', response);
        }
      } catch (error) {
        console.log(' Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileSection}>

            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Image
                source={
                  profileData?.avatar
                    ? { uri: profileData.avatar }
                    : require('../../assets/images/shubhamicon.png')
                }
                style={styles.profileImg}
              />
            )}

            <TouchableOpacity onPress={toggleModal} activeOpacity={0.8}>
              <Text style={styles.welcomeText}>Welcome Back</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Text style={styles.userName}>
                  {profileData?.name || 'User'}
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={18}
                  color="#000"
                  style={{ marginLeft: 4, marginTop: 2 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <Image
                source={require('../../assets/images/car.png')}
                style={styles.crownIcon}
              />
            </View>

            <View style={styles.iconContainer2}>
              <Image
                source={require('../../assets/images/bellIcon.png')}
                style={styles.headericon}
              />
            </View>
          </View>
        </View>


        <View style={styles.searchBar}>
          <Ionicons name="search" size={25} color="#252525" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Posts, Reels, or GIFs..."
            placeholderTextColor="#888"
          />
          <Image
            source={require('../../assets/images/filtericon.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: '#414141',
              backgroundColor: '#fff',
            }}
          />
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabActiveText}> Trending Now 🔥</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>⬇️ Most Downloaded</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>🎥 Viral Reels</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.posterCard}>
            <Image
              source={require('../../assets/images/posterimage.png')}
              style={styles.posterImg}
            />
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.downloadBtn}>
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Profile</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={toggleModal}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {profiles.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.profileCard}
                  activeOpacity={0.8}
                  onPress={() => {
                    toggleModal();
                    navigation.navigate('EditProfile', {
                      profileType: 'personal',
                    });
                  }}
                >
                  <View style={styles.avatarBorderBox}>
                    <Image
                      source={
                        profileData?.avatar
                          ? { uri: profileData.avatar }
                          : require('../../assets/images/shubhamicon.png')
                      }
                      style={styles.profileAvatar}
                    />
                  </View>
                  <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>
                      {profileData?.name || 'User'}
                    </Text>
                    <View style={styles.profileTag}>
                      <Text style={styles.profileTagText}>
                        {profileData?.profile_type || 'Personal'}
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#000" />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.createProfileBtn}
              onPress={() => {
                toggleModal();
                navigation.navigate('BusinessProfile');
              }}
            >
              <Text style={styles.createProfileText}>Create New Profile</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
