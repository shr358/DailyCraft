
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
  Platform,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileDetails, getAllProfiles, gethomescreenTemplate, getTemplates } from '../services/Apiconfig';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ProfileDataType } from '../../navigation/types';

import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { Buffer } from 'buffer';

type HomeScreenprops = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

export type ProfileItemType = {
  id: string;
  name?: string;
  avatar?: string;
  profile_type?: string;
};

export type TemplateType = {
  id?: string;
  title?: string;
  image_url?: string;
  description?: string;
};

const HomeScreen = ({ navigation }: HomeScreenprops) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [profileData, setProfileData] = useState<ProfileDataType | null>(null);
  const [allProfiles, setAllProfiles] = useState<ProfileItemType[]>([]);
  const [templateData, setTemplateData] = useState<TemplateType | null>(null);
  const [loading, setLoading] = useState(true);
  const [profilesLoading, setProfilesLoading] = useState(false);
  const [templateLoading, setTemplateLoading] = useState(false);


  const [templates, setTemplates] = useState<TemplateType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAllTemplates = async () => {
  try {
    const response = await getTemplates();

    if (response?.status && Array.isArray(response.data)) {
      setTemplates(response.data);
    } else {
      setTemplates([]);
    }
  } catch (error) {
    console.log('Error loading template list:', error);
    setTemplates([]);
  }
};


  const fetchTemplateData = async (templateId?: string) => {
    try {
      setTemplateLoading(true);

      const profileId = await AsyncStorage.getItem('profile_id');
      if (!profileId) return;

      const idToUse = templateId || templates[currentIndex]?.id;
      if (!idToUse) return;

      const response = await gethomescreenTemplate(profileId, idToUse);

      if (response?.status) {
        setTemplateData({
          image_url: response.image_url,
          description: response.description

        });
      } else {
        setTemplateData(null);
      }
    } catch (error) {
      console.log('Error fetching template:', error);
      setTemplateData(null);
    } finally {
      setTemplateLoading(false);
    }
  };


  const handleNext = async () => {
    if (templates.length === 0) return;

    let nextIndex = currentIndex + 1;

    if (nextIndex >= templates.length) nextIndex = 0;

    setCurrentIndex(nextIndex);

    fetchTemplateData(templates[nextIndex].id);
  };


  const fetchAllProfiles = async () => {
    try {
      setProfilesLoading(true);
      const response = await getAllProfiles();

      if (response?.status && Array.isArray(response.data)) {
        setAllProfiles(response.data);
      } else {
        setAllProfiles([]);
      }
    } catch (error) {
      console.log('Error fetching all profiles:', error);
      setAllProfiles([]);
    } finally {
      setProfilesLoading(false);
    }
  };


  const fetchProfileData = async () => {
    try {
      const profileId = await AsyncStorage.getItem('profile_id');
      if (!profileId) return;

      const response = await getProfileDetails(profileId);
      if (response?.status && response.data) {
        setProfileData(response.data);
      }
    } catch (error) {
      console.log('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      await fetchAllTemplates();
      await fetchProfileData();
      await fetchAllProfiles();
      setLoading(false);
    };
    initializeData();
  }, []);


  useEffect(() => {
    if (templates.length > 0) {
      fetchTemplateData(templates[0].id);
    }
  }, [templates]);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProfileData();
      fetchAllProfiles();
      fetchTemplateData();
    });
    return unsubscribe;
  }, [navigation]);

const downloadimage = async () => {
  try {
    if (!templateData?.image_url) return;

    const fileName = `template_${Date.now()}.png`;
    const filePath =
      Platform.OS === 'android'
        ? `${RNFS.DownloadDirectoryPath}/${fileName}`
        : `${RNFS.TemporaryDirectoryPath}/${fileName}`;


    if (templateData.image_url.startsWith('data:image')) {
      const base64Data = templateData.image_url.replace(/^data:image\/\w+;base64,/, '');
      await RNFS.writeFile(filePath, base64Data, 'base64');
    } else {

      const response = await axios.get(templateData.image_url, { responseType: 'arraybuffer' });
      const base64Data = Buffer.from(response.data, 'binary').toString('base64');
      await RNFS.writeFile(filePath, base64Data, 'base64');
    }

    if (Platform.OS === 'android') {

      try {
        await RNFS.scanFile(filePath);
      } catch (e) {
        console.log('Error scanning file:', e);
      }

      Alert.alert('Success', 'Image downloaded to Downloads folder!');
    } else {

      await Share.open({ url: `file://${filePath}`, type: 'image/png', filename: fileName });
    }
  } catch (err) {
    console.log('Download Error:', err);
    Alert.alert('Error', 'Could not download image');
  }
};


  const toggleModal = async () => {
    const newState = !isModalVisible;
    setModalVisible(newState);
    if (newState) fetchAllProfiles();
  };


  const handleselecteditem = async (item: ProfileItemType) => {
    try {
      await AsyncStorage.setItem('profile_id', item.id.toString());
      await fetchProfileData();
      await fetchTemplateData();
      setModalVisible(false);
    } catch (error) {
      console.log('error selecting profile:', error);
    }
  };

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
                <Text style={styles.userName}>{profileData?.name || 'User'}</Text>
                <Ionicons name="chevron-down" size={18} color="#000" style={{ marginLeft: 4 }} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
              <Image source={require('../../assets/images/car.png')} style={styles.crownIcon} />
            </View>
            <View style={styles.iconContainer2}>
              <Image source={require('../../assets/images/bellIcon.png')} style={styles.headericon} />
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
            style={{ width: 22, height: 22, tintColor: '#414141', backgroundColor: '#fff' }}
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

{templateLoading || !templateData ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#000" />
    <Text style={{ marginTop: 10, fontSize: 16 }}>Loading Template...</Text>
  </View>
) : (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.posterCard}>
      <View style={styles.templateContainer}>
        {templateData?.image_url ? (
          <Image
            source={{ uri: templateData.image_url }}
            style={styles.templateImage}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.placeholderImage}>
            <Text>No Template Image Available</Text>
          </View>
        )}

        {templateData.description && (
          <Text style={styles.templateDescription}>{templateData.description}</Text>
        )}
      </View>
    </View>

    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.downloadBtn} onPress={downloadimage}>
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)}


        <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={toggleModal}>
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
              {profilesLoading ? (
                <ActivityIndicator size="large" color="#000" style={{ marginVertical: 20 }} />
              ) : allProfiles.length > 0 ? (
                allProfiles.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.profileCard}
                    activeOpacity={0.8}
                    onPress={() => handleselecteditem(item)}
                  >
                    <View style={styles.avatarBorderBox}>
                      <Image
                        source={
                          item.avatar
                            ? { uri: item.avatar }
                            : require('../../assets/images/shubhamicon.png')
                        }
                        style={styles.profileAvatar}
                      />
                    </View>

                    <View style={styles.profileInfo}>
                      <Text style={styles.profileName}>{item.name || 'User'}</Text>
                      <View style={styles.profileTag}>
                        <Text style={styles.profileTagText}>{item.profile_type || 'Personal'}</Text>
                      </View>
                    </View>

                    <Ionicons name="chevron-forward" size={20} color="#000" />
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={{ textAlign: 'center', color: '#999', marginTop: 15 }}>
                  No profiles available
                </Text>
              )}
            </ScrollView>

            <TouchableOpacity
              style={styles.createProfileBtn}
              onPress={() => {
                toggleModal();
                navigation.navigate('ChooseProfileType');
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






