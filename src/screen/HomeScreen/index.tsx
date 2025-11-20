
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
import { getProfileDetails, getAllProfiles, gethomescreenTemplate } from '../services/Apiconfig';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList , ProfileDataType} from '../../navigation/types';

import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { Platform, PermissionsAndroid, Alert } from 'react-native';


type HomeScreenprops = {
  navigation : NativeStackNavigationProp<RootStackParamList,'HomeScreen'>
}

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

const fetchTemplateData = async () => {
  try {
    setTemplateLoading(true);

    const profileId = await AsyncStorage.getItem('profile_id');
    if (!profileId) return;

    const templateId = '18';
    const response = await gethomescreenTemplate(profileId, templateId);

    // console.log('Template Data:>>>>>>>', response);

    if (response?.status) {
      setTemplateData({ image_url: response.image_url });
    } else {
      setTemplateData(null);
    }

  } catch (error) {
    console.log('Error fetching template data:>>>>>>>', error);
    setTemplateData(null);
  } finally {
    setTemplateLoading(false);
  }
};


  const fetchAllProfiles = async () => {
    try {
      setProfilesLoading(true);
      const response = await getAllProfiles();
      console.log('All Profiles:>>>>>>>>', response);

      if (response?.status && Array.isArray(response.data)) {
        setAllProfiles(response.data);
      } else {
        setAllProfiles([]);
      }
    } catch (error) {
      console.log('Error fetching all profiles:>>>>>>>', error);
      setAllProfiles([]);
    } finally {
      setProfilesLoading(false);
    }
  };

  const fetchProfileData = async () => {
    try {
      const profileId = await AsyncStorage.getItem('profile_id');
      if (!profileId) {
        console.log('No profile_id found in storage');
        return;
      }

      const response = await getProfileDetails(profileId);
      if (response?.status && response.data) {
        setProfileData(response.data);
      }
    } catch (error) {
      console.log('Error fetching profile data:>>>>>>>', error);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      await fetchProfileData();
      await fetchAllProfiles();
      await fetchTemplateData();
      setLoading(false);
    };
    initializeData();
  }, []);

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


    const base64Data = templateData.image_url.replace(/^data:image\/\w+;base64,/, "");
    const fileName = `template_${Date.now()}.png`;

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Required", "Please allow media permission');
        return;
      }
    }


    if (Platform.OS === 'android') {
      const path = `${RNFS.DownloadDirectoryPath}/${fileName}`;
      await RNFS.writeFile(path, base64Data, 'base64');

      Alert.alert('Success', 'Image downloaded to Downloads folder!');
      console.log('Saved at:', path);

      return;
    }

    await Share.open({
      url: templateData.image_url,
      type: 'image/png',
      filename: fileName,
    });

    return 'shared';

  } catch (error) {
    console.log('Download error:', error);
    Alert.alert('Error', 'Could not download image');
  }
};

  const toggleModal = async () => {
    const newState = !isModalVisible;
    setModalVisible(newState);
    if (newState) {
      await fetchAllProfiles();
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

            {templateLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#000" />
                <Text style={styles.loadingText}>Loading Template...</Text>
              </View>
            ) : templateData ? (
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

                <View style={styles.templateInfo}>
                  {/* <Text style={styles.templateTitle}>
                    {templateData.title || 'Template Title'}
                  </Text> */}
                  {templateData.description && (
                    <Text style={styles.templateDescription}>
                      {templateData.description}
                    </Text>
                  )}
                </View>
              </View>
            ) : (
              <View style={styles.noTemplateContainer}>
                <Text style={styles.noTemplateText}>
                  No template data available
                </Text>
              </View>
            )}
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.downloadBtn} onPress={downloadimage}>
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
              {profilesLoading ? (
                <ActivityIndicator
                  size="large"
                  color="#000"
                  style={{ marginVertical: 20 }}
                />
              ) : allProfiles.length > 0 ? (
                allProfiles.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.profileCard}
                    activeOpacity={0.8}
                    onPress={() => {
                      toggleModal();
                      navigation.navigate('EditProfile', {
                        profileType: item.profile_type,
                        profileId: item.id,
                      });
                    }}
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
                        <Text style={styles.profileTagText}>
                          {item.profile_type || 'Personal'}
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#000" />
                  </TouchableOpacity>
                ))
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#999',
                    marginTop: 15,
                    fontSize: 14,
                  }}
                >
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
