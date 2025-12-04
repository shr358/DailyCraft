
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { getProfileDetails } from '../services/Apiconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList , ProfileDataType} from '../../navigation/types';
import { DeleteProfile , getAllProfiles} from '../services/Apiconfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../screen/Redux/store';

import Toast from 'react-native-toast-message';

type ProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const Profile = ({ navigation }: { navigation: ProfileNavigationProp }) => {
  const [profileData, setProfileData] = useState<ProfileDataType | null>(null);
  const [loading, setLoading] = useState(true);

const isPremium = useSelector((state: RootState) => state.membership.isPremium);
  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const profile_id = await AsyncStorage.getItem('profile_id');
        if (!profile_id) {
          console.log('No profile_id found');
          setLoading(false);
          return;
        }

        const response = await getProfileDetails(profile_id);
        if (response?.status && response.data) {
          setProfileData(response.data);
        } else {
          console.log('Invalid profile response:', response);
        }
      } catch (error) {
        console.log('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchProfile();
    });

    return unsubscribe;

  }, [navigation]);


  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user_id');

      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],

      });
    } catch (error) {
      console.log('Logout error:', error);
    }
  };


  const handleDelete = async () => {
  try {
    const profileId = await AsyncStorage.getItem('profile_id');
    if (!profileId) {
      console.log('No profile ID found');
      return;
    }

    const allProfiles = await getAllProfiles();
    if (!allProfiles?.status || !Array.isArray(allProfiles.data)) return;

    const currentProfile = allProfiles.data.find(p => p.id.toString() === profileId);
    if (!currentProfile) return;

    if (currentProfile.is_primary) {

 Toast.show({
       type: 'success',
  text1: 'delete successfully',
  position: 'top',
  visibilityTime: 3000,
      });
  return;
    }


    const response = await DeleteProfile(profileId);
    console.log('Delete Response:', response);

    if (response?.status === true) {
          Toast.show({
        type: 'success',
        text1: 'Profile deleted successfully',
        position: 'top',
      });
      await AsyncStorage.removeItem('profile_id');

      const remainingProfiles = allProfiles.data.filter(p => p.id.toString() !== profileId);
      if (remainingProfiles.length > 0) {
        const newProfileId = remainingProfiles[0].id.toString();
        await AsyncStorage.setItem('profile_id', newProfileId);

        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ChooseProfileType' }],
        });
      }
    }
  } catch (error) {
    console.log('Delete Error:', error);
  }
};

  return (
    <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Profile Details</Text>
          </View>

          <View style={styles.profileCard}>
            {loading ? (
              <ActivityIndicator size="large" color="#ff914d" />
            ) : (
              <>
                <Image
                  source={
                    profileData?.avatar
                      ? { uri: profileData.avatar }
                      : require('../../assets/images/shubhamicon.png')
                  }
                  style={styles.profileImage}
                />

                <View style={styles.profileInfo}>
                  <Text style={styles.profileName}>
                    {profileData?.name || 'User'}
                  </Text>
                  <View style={styles.roleBadge}>
                    <Text style={styles.roleText}>
                      {profileData?.profile_type || 'Personal'}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() =>
                    navigation.navigate('EditProfile', { data: profileData })
                  }
                >
                  <Text style={styles.editText}>Edit Profile</Text>
                </TouchableOpacity>

              </>
            )}
          </View>

{!isPremium && (
          <View style={styles.premiumCard}>
            <View style={styles.premiumLeft}>
              <Image
                source={require('../../assets/images/premiumicon.png')}
                style={styles.premiumIcon}
              />
              <View>
                <Text style={styles.premiumTitle}>Upgrade to Premium</Text>
                <Text style={styles.premiumSubtitle}>
                  Download faster, ad-free,{'\n'}and in HD quality
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.upgradeButton}
              onPress={() => navigation.navigate('SubscriptionModal')}

            >
              <Text style={styles.upgradeText}>Upgrade Now</Text>
            </TouchableOpacity>
          </View>
)}
          <View style={styles.sectionOuter}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Settings</Text>

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <Image
                    source={require('../../assets/images/updatapp.png')}
                    style={styles.optionIcon}
                  />
                  <Text style={styles.optionText}>App Update</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionRow} onPress={handleDelete}>
                <View style={styles.optionLeft}>
                  <Image
                    source={require('../../assets/images/accdelete.png')}
                    style={styles.optionIcon}
                  />
                  <Text style={styles.optionText}>Delete Account</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionOuter}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Help & Support</Text>

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <Image
                    source={require('../../assets/images/faq.png')}
                    style={styles.optionIcon}
                  />
                  <Text style={styles.optionText}>FAQ</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <Image
                    source={require('../../assets/images/callicon.png')}
                    style={styles.optionIcon}
                   />
                  <Text style={styles.optionText}>Call us</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  <Image
                    source={require('../../assets/images/iconwhatpp.png')}
                    style={styles.optionIcon}
                  />
                  <Text style={styles.optionText}>Whatsapp Support</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerGrid}>
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.footerText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.footerText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.footerText}>Terms & Condition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={handleLogout}>
              <Text style={styles.footerText}>Log Out</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;
