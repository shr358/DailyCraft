import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import styles from './styles';

const Download = () => {
  const posters = [
    require('../../assets/images/posterimage.png'),
    require('../../assets/images/posterimage.png'),
    require('../../assets/images/posterimage.png'),
  ];

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


          <View style={styles.gridContainer}>
            {posters.map((poster, index) => (
              <View style={styles.gridItem} key={index}>
                <Image
                  source={poster}
                  style={styles.posterImage}
                  resizeMode="cover"
                />
              </View>
            ))}


            <View style={styles.gridItem} />
            <View style={styles.gridItem} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Download;
