
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import { getTemplates } from '../services/Apiconfig';
import styles from './styles';


type TemplateItem = {
  file_path: string;
  template_name?: string;
};

const Download = () => {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await getTemplates();
        if (data?.status && Array.isArray(data?.data)) {
          setTemplates(data.data as TemplateItem[]);
        } else {
          setTemplates([]);
        }
      } catch (error) {
        console.log('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/homebackground.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>All Downloads</Text>
            <Text style={styles.subtitle}>
              From flirty moments to heartfelt stories, explore love in every color.
            </Text>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />
          ) : (
            <View style={styles.gridContainer}>
              {templates.length > 0 ? (
                templates.map((item, index) => {
                  console.log('Image URL:', item?.file_path);
                  return (
                    <View style={styles.gridItem} key={index}>
                      <Image
                        source={{ uri: item?.file_path }}
                        style={styles.posterImage}
                        resizeMode="cover"
                      />
                      {/* {item?.template_name && (
                        <Text style={styles.templateTitle}>{item?.template_name}</Text>
                      )} */}
                    </View>
                  );
                })
              ) : (
                <Text style={styles.noDataText}>No templates available</Text>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Download;
