
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image,ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
   <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
    <View style={styles.container}>



      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/shubhamicon.png')}
            style={styles.profileImg}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.userName}>Shubham Agrawal</Text>
          </View>
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
          style={{ width: 22, height: 22, tintColor: '#414141',backgroundColor:'#fff' }}
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
          <TouchableOpacity style={styles.nextBtn} onPress =  {()=>navigation.navigate('Recommend')}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


       <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: require('../../assets/images/Homeicon.png'), route: 'HomeScreen' },
          { name: 'Recommend', icon: require('../../assets/images/recommendicon.png'), route: 'Recommend' },
          { name: 'Downloads', icon: require('../../assets/images/DownLoad.png'), route: 'Download' },
          { name: 'Profile', icon: require('../../assets/images/Profileicon.png'), route: 'Profile' },
        ].map(item => (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => {
              setActiveTab(item.name);
              navigation.navigate(item.route);
            }}
          >
            <View
              style={[
                styles.navIconWrapper,
                activeTab === item.name && styles.activeNavCircle,
              ]}
            >
              <Image
                source={item.icon}
                style={[
                  styles.navIcon,
                  activeTab === item.name && { tintColor: '#fff' },
                ]}
              />
            </View>
            <Text
              style={[
                styles.navLabel,
                activeTab === item.name && { color: '#FF7B54' },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
</ImageBackground>

  );
};

export default HomeScreen;
