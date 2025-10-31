

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Button from '../../components/Button';

const PersonalProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Personal Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Please Upload A Business Logo</Text>

          <TouchableOpacity style={styles.uploadBtn}>
            <Ionicons name="image-outline" size={24} color="#FFFFFF" style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.label}>Enter Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
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
          style={[styles.input, styles.textlarge]}
          placeholder="Type Here"
          placeholderTextColor="#777"
        />



        <View style={styles.bottomContainer}>
          <Button title="Continue" onPress={() => navigation.navigate('PersonalProfile')} />
        </View>


        <TouchableOpacity style={styles.switchBtn}>
          <Text style={styles.switchText}>
             <Text style={styles.switchtext1}>Switch to
               <Text style={styles.switchtext2}> Personal Profile</Text>
                 </Text>
                 </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PersonalProfile;
