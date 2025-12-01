
import React, { useEffect, useRef, useState } from 'react';
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
  FlatList,
  Dimensions,
  FlatListProps,
  Keyboard,
  FlatList as RNFlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileDetails, getAllProfiles, gethomescreenTemplate, getTemplates, getallcategory } from '../services/Apiconfig';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ProfileDataType } from '../../navigation/types';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import axios from 'axios';
import { Buffer } from 'buffer';
import { px } from '../../utils/dimensions';

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
  image_url?: string | null;
  description?: string | null;
};

const SCREEN_HEIGHT = Dimensions.get('window').height;

const HomeScreen = ({ navigation }: HomeScreenprops) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [profileData, setProfileData] = useState<ProfileDataType | null>(null);
  const [allProfiles, setAllProfiles] = useState<ProfileItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [profilesLoading, setProfilesLoading] = useState(false);
  const [templateLoading, setTemplateLoading] = useState(false);

  const [templates, setTemplates] = useState<TemplateType[]>([]);
  const [renderTemplates, setRenderTemplates] = useState<TemplateType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories ,setCategories] = useState([]);
 const [activeCategory, setActiveCategory] = useState<string | null>(null);
const [activeProfileId, setActiveProfileId] = useState<string | null>(null);

  const flatListRef = useRef<RNFlatList<TemplateType> | null>(null);


  const fetchAllTemplates = async () => {
    try {
      const response = await getTemplates();
      if (response?.status && Array.isArray(response.data)) {
        setTemplates(response.data);
        setRenderTemplates(response.data.map((t: any) => ({ ...t, image_url: null, description: null })));
      } else {
        setTemplates([]);
        setRenderTemplates([]);
      }
    } catch (err) {
      console.log('Error loading template list:', err);
      setTemplates([]);
      setRenderTemplates([]);
    }
  };

const autoSelectFirstProfile = async (profiles: any[]) => {
    const savedId = await AsyncStorage.getItem('profile_id');

    if (!savedId && profiles.length > 0) {
      const first = profiles[0].id.toString();

      await AsyncStorage.setItem('profile_id', first);
      setActiveProfileId(first);

      await fetchProfileData();

      if (templates[0]?.id) {
        await fetchTemplateData(templates[0].id, 0);
      }
    }
  };



  const fetchTemplateData = async (templateId?: string, index?: number) => {
    try {
      if (!templateId) return;
      setTemplateLoading(true);

      const profileId = await AsyncStorage.getItem('profile_id');
      if (!profileId) return;

      const response = await gethomescreenTemplate(profileId, templateId);

      if (response?.status) {
        const image_url = response.image_url ?? null;
        const description = response.description ?? null;

        if (typeof index === 'number') {
          setRenderTemplates((prev) => {
            const copy = [...prev];
            if (index >= copy.length) {
              for (let i = copy.length; i <= index; i++) {
                copy[i] = { id: templates[i]?.id ?? String(i), title: templates[i]?.title ?? null, image_url: null, description: null };
              }
            }


            copy[index] = {
              ...copy[index],
              id: templates[index]?.id ?? templateId,
              title: templates[index]?.title ?? copy[index]?.title,
              image_url,
              description,
            };
            return copy;
          });
        } else {
          setRenderTemplates((prev) => {
            const copy = [...prev];
            const idx = copy.findIndex((t) => t?.id === templateId);
            if (idx >= 0) {
              copy[idx] = { ...copy[idx], image_url, description };
            }
            return copy;
          });
        }
      }
    } catch (err) {
      console.log('Error fetching template:', err);
    } finally {
      setTemplateLoading(false);
    }
  };


  const handleNext = async () => {
    if (templates.length === 0) return;
    const nextIndex = (currentIndex + 1) % templates.length;

    try {

      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } catch (err) {
      console.log('scrollToIndex error', err);
    }

    setCurrentIndex(nextIndex);

    if (!renderTemplates[nextIndex]?.image_url && templates[nextIndex]?.id) {
      fetchTemplateData(templates[nextIndex].id, nextIndex);
    }
  };




  const downloadimage = async (item: TemplateType) => {
    try {
      if (!item?.image_url) {
        Alert.alert('No image', 'Image not available for download');
        return;
      }

      const fileName = `template_${Date.now()}.png`;
      const filePath =
        Platform.OS === 'android'
          ? `${RNFS.DownloadDirectoryPath}/${fileName}`
          : `${RNFS.TemporaryDirectoryPath}/${fileName}`;

      if (item.image_url.startsWith('data:image')) {
        const base64Data = item.image_url.replace(/^data:image\/\w+;base64,/, '');
        await RNFS.writeFile(filePath, base64Data, 'base64');
      } else {
        const response = await axios.get(item.image_url, { responseType: 'arraybuffer' });
        const base64Data = Buffer.from(response.data, 'binary').toString('base64');
        await RNFS.writeFile(filePath, base64Data, 'base64');
      }

      if (Platform.OS === 'android') {
        try {
          await RNFS.scanFile(filePath);
        } catch (e) {

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



useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getallcategory();
        setCategories(res.data);
      } catch (err) {
        console.log('Category error:', err);
      }
    };
    fetchCategories();
  }, []);


  const fetchAllProfilesFn = async () => {
    try {
      setProfilesLoading(true);
      const response = await getAllProfiles();
      if (response?.status && Array.isArray(response.data)) {
        setAllProfiles(response.data);
         await autoSelectFirstProfile(response.data);

      } else {
        setAllProfiles([]);
      }
    } catch (err) {
      console.log('Error fetching profiles:', err);
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
        setActiveProfileId(response.data.id?.toString());
      }
    } catch (err) {
      console.log('Error fetching profile data:', err);
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await fetchAllTemplates();
          await fetchAllProfilesFn();

      await fetchProfileData();
       if (templates[0]?.id) {
      await fetchTemplateData(templates[0].id, 0);
    }


      setLoading(false);
    };
    init();

  }, []);
  useEffect(() => {
    if (templates.length > 0) {
      setRenderTemplates((prev) => {
        if (prev.length === templates.length) return prev;
        return templates.map((t) => ({ ...t, image_url: null, description: null }));
      });

      if (templates[0]?.id) {
        fetchTemplateData(templates[0].id, 0);
      }
    }

  }, [templates]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProfileData();
      fetchAllProfilesFn();

      if (templates[currentIndex]?.id && !renderTemplates[currentIndex]?.image_url) {
        fetchTemplateData(templates[currentIndex].id, currentIndex);
      }
    });
    return unsubscribe;

  }, [navigation, templates, currentIndex, renderTemplates]);

  const renderItem: FlatListProps<TemplateType>['renderItem'] = ({ item, index }) => {
    const cached = renderTemplates[index] ?? item;
    const imageUrl = cached?.image_url ?? null;
    const description = cached?.description ?? null;


    const isLoadingThisItem = templateLoading && !imageUrl;

    return (
      <View style={{ height: SCREEN_HEIGHT,paddingLeft:px(10)}}>
        <View style={styles.posterCard}>
          <View style={styles.templateContainer}>
            {isLoadingThisItem ? (
              <View style={styles.placeholderImage}>
                <ActivityIndicator size="large" color="#000" />
                <Text style={{ marginTop: 10 }}>Loading...</Text>
              </View>
            ) : imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.templateImage} resizeMode="contain" />
            ) : (
              <View style={styles.placeholderImage}>
                <Text style={{ color: '#666' }}>No Template Available</Text>
              </View>
            )}

            {description ? <Text style={styles.templateDescription}>{description}</Text> : null}
          </View>
        </View>

      </View>
    );
  };

  const getItemLayout = (_: TemplateType[] | null | undefined, index: number) => ({
    length: SCREEN_HEIGHT,
    offset: SCREEN_HEIGHT * index,
    index,
  });

  const currentTemplate = renderTemplates[currentIndex] ?? templates[currentIndex];


  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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

          <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.8}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.userName}>{profileData?.name || 'User'}</Text>
              <Ionicons name="chevron-down" size={18} color="#000" style={{ marginLeft: 4 }} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Image source={require('../../assets/images/crawn.png')} style={styles.crownIcon} />
          </View>
          <View style={styles.iconContainer2}>
            <Image source={require('../../assets/images/iconbell.png')} style={styles.headericon} />
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


<FlatList
  data={categories}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item.id.toString()}
  contentContainerStyle={{
    paddingHorizontal: px(10),
    paddingVertical: px(8),
     marginTop: px(2),
    marginBottom: px(12),
  }}
  renderItem={({ item }) => {
    const isActive = activeCategory === item.id;

    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(item.id)}
        style={{
          backgroundColor: isActive ? '#FF7F32' : '#FFFFFF',
          paddingHorizontal: px(18),
          height: px(34),
          borderRadius: px(20),
          marginTop:px(0),
          marginRight: px(5),
          marginLeft:px(8),
          borderWidth: isActive ? 0 : 1,
          borderColor: '#C5C5C5',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
          marginBottom:5
        }}
      >
        <Text
          style={{
            color: isActive ? '#FFFFFF' : '#000000',
            fontSize: px(12),
            fontWeight: '700',
          }}
        >
          {item.category_name}
        </Text>
      </TouchableOpacity>
    );
  }}
/>




      {templates.length === 0 || templateLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',position: 'absolute', top: 0, bottom: 0, left: 0, right: 0  }}>
          <ActivityIndicator size="large" color="#000" />
          <Text style={{ marginTop: 10, fontSize: 16 }}>Loading Template...</Text>
        </View>
      ) : (
        <FlatList
          ref={(r) => (flatListRef.current = r)}
          data={templates}
          renderItem={renderItem}
          keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
          pagingEnabled
          snapToInterval={SCREEN_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.y / SCREEN_HEIGHT);
            setCurrentIndex(index);
            if (templates[index]?.id && !renderTemplates[index]?.image_url) {
              fetchTemplateData(templates[index].id, index);
            }
          }}
          getItemLayout={getItemLayout}
          windowSize={3}
          initialNumToRender={1}
        />
      )}


          <View style={styles.fixedActionRow}>
            <TouchableOpacity
              style={styles.downloadBtn}
              onPress={() => downloadimage(currentTemplate)}
            >
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Profile</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: px(20),flexGrow:1 }}>
            {profilesLoading ? (
              <ActivityIndicator size="large" color="#000" style={{ marginVertical: 20 }} />
            ) : allProfiles.length > 0 ? (
              allProfiles.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.profileCard}
                  activeOpacity={0.8}
                  onPress={async () => {
                    try {
                      setModalVisible(false);
                      await AsyncStorage.setItem('profile_id', item.id.toString());
                      setActiveProfileId(item.id.toString());
                      await fetchProfileData();
                      if (templates[currentIndex]?.id) {
                        await fetchTemplateData(templates[currentIndex].id, currentIndex);
                      }
                    } catch (err) {
                      console.log('error selecting profile:', err);
                    }
                  }}
                >
                  <View style={styles.avatarBorderBox}>
                    <Image
                      source={
                        item.avatar ? { uri: item.avatar } : require('../../assets/images/shubhamicon.png')
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


<View
  style={{
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: activeProfileId === item.id.toString() ? "#FF7F32" : "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Ionicons
    name="checkmark"
    size={18}
    color="#fff"
    style={{
      marginTop: 1,
      transform: [{ scaleX: 1.35 }, { scaleY: 1.35 }],
      textShadowColor: "#fff",
      textShadowRadius: 3,
    }}

  />
</View>
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
              setModalVisible(false);
              navigation.navigate('ChooseProfileType');
            }}
          >
            <Text style={styles.createProfileText}>Create New Profile</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  </ImageBackground>
</TouchableWithoutFeedback>
  );
};

export default HomeScreen;
