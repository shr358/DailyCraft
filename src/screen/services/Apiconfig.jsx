

import axiosInstance from '../axiousInstances';
import { ENDPOINTS } from './EndPoints';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sendOtp = async (phoneNumber) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.sendOtp, {
      phone_number: phoneNumber,
    });
    console.log('Send OTP Response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Send OTP error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const verifyOtp = async (phoneNumber, otp) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.verifyOtp, {
      phone_number: phoneNumber,
      otp_code: otp,
    });
    console.log('Verify OTP Response:', response.data);
     if (response.data?.status && response.data?.data?.token) {
      await AsyncStorage.setItem('token', response.data.data.token);
    }
    return response.data;

  } catch (error) {
    console.log('Verify OTP error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};



export const createProfile = async (profileData) => {
  try {
    const response = await axiosInstance.post(
      ENDPOINTS.createProfile,
      profileData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      }
    );

    console.log('Create Profile Response:', response.data);


    if (response.data?.status && response.data?.data?.id) {
      await AsyncStorage.setItem('profile_id', response.data.data.id.toString());
      console.log(' Saved profile_id:', response.data.data.id);
    }

    return response.data;
  } catch (error) {
    console.log('Create Profile error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const getProfileDetails = async (profile_id) => {
  try {
    const response = await axiosInstance.get(`profile?profile_id=${profile_id}`);
    console.log('Profile Details Response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Profile Details Error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};



export const updateProfile = async (profileData) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.updateprofile, profileData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    console.log('Update Profile Response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Update Profile error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};



