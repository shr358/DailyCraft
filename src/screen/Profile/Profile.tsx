
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Profile = ({ navigation }) => {
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
            <Image
              source={require('../../assets/images/shubhamicon.png')}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Shubham Agrawal</Text>
              <View style={styles.roleBadge}>
                <Text style={styles.roleText}>Business</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>


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
              onPress={() => navigation.navigate('UnlockPremiumFeatures')}
            >
              <Text style={styles.upgradeText}>Upgrade Now</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.sectionOuter}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Settings</Text>

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  {/* <Ionicons name="cloud-download-outline" size={20} color="#ff914d" /> */}
                   <Image
                    source={require('../../assets/images/appupdate.png')}
                    style={styles.optionIcon}
                  />

                  <Text style={styles.optionText}>App Update</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />


              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  {/* <Ionicons name="trash-outline" size={20} color="#ff914d" /> */}
                   <Image
                    source={require('../../assets/images/deleteacc.png')}
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
                  {/* <Ionicons name="help-circle-outline" size={20} color="#ff914d" /> */}
                   <Image
                    source={require('../../assets/images/FAQ.png')}
                    style={styles.optionIcon}
                  />

                  <Text style={styles.optionText}>FAQ</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />

              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  {/* <Ionicons name="call-outline" size={20} color="#ff914d" /> */}
                  <Image
                    source={require('../../assets/images/callIcon.png')}
                    style={styles.optionIcon}
                  />

                  <Text style={styles.optionText}>Call us</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#999" />

              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionRow}>
                <View style={styles.optionLeft}>
                  {/* <Ionicons name="logo-whatsapp" size={20} color="#ff914d" /> */}
                   <Image
                    source={require('../../assets/images/whtppicon.png')}
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
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.footerText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Profile;
