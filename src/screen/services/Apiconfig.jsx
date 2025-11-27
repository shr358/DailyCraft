

import axiosInstance from '../axiousInstances';
import { ENDPOINTS } from './EndPoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';
import { adminAxios } from '../axiousInstances';

export const sendOtp = async (phoneNumber) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.sendOtp, {
      phone_number: phoneNumber,
    });
    console.log('Send OTP Response:>>>>>>>', response.data);
    return response.data;
  } catch (error) {
    console.log('Send OTP error:>>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};



export const verifyOtp = async (phoneNumber, otp) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.verifyOtp, {
      phone_number: phoneNumber,
      otp_code: otp,
    });

    console.log('Verify OTP Response:>>>>>>>', response.data);


    if (response?.data?.status === true) {


      const token = response.data.data.accessToken;

      console.log('Saving token:>>>>>>>', token);


      await AsyncStorage.setItem('token', token);

      const saved = await AsyncStorage.getItem('token');
      console.log('Token saved in storage:>>>>>>>', saved);
    }

    return response.data;

  } catch (error) {
    console.log('Verify OTP error:>>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const createProfile = async (profileData) => {
  try {

const token = await AsyncStorage.getItem('token');
console.log('Token being sent:', token);
    const response = await axiosInstance.post(
      ENDPOINTS.createProfile,
      profileData,
      {
        headers: { 'content-type': 'multipart/form-data' ,
            Authorization: token ? `Bearer ${token}` : '',
        },
      }
    );

    console.log('Create Profile Response:>>>>>>>>', response.data);


    if (response.data?.status && response.data?.data?.id) {
      await AsyncStorage.setItem('profile_id', response.data.data.id.toString());
      console.log(' Saved profile_id:>>>>>', response.data.data.id);
    }

    return response.data;
  } catch (error) {
    console.log('Create Profile error:>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const getProfileDetails = async (profile_id) => {
  try {
    const response = await axiosInstance.get(`profile?profile_id=${profile_id}`);
    console.log('Profile Details Response:>>>>>>', response.data);
    return response.data;
  } catch (error) {
    console.log('Profile Details Error:>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};



export const updateProfile = async (profileData) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.updateprofile, profileData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    console.log('Update Profile Response:>>>>>>', response.data);
    return response.data;
  } catch (error) {
    console.log('Update Profile error:>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const getAllProfiles = async () => {
  try {
    const response = await axiosInstance.get(ENDPOINTS.getallprofiles);
    console.log('All Profiles Response:>>>>>>>', response.data);
    return response.data;
  } catch (error) {
    console.log('All Profiles Error:>>>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const getTemplates = async () => {
  try {
    const response = await axiosInstance.get(ENDPOINTS.downloadtemplate);
    console.log('Templates Response:>>>>>>>', response.data);
    return response.data;
  } catch (error) {
    console.log('Templates Error:>>>>>>>>', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

export const getLanguages = async ()=>{
try{
  const response = await axiosInstance.get(ENDPOINTS.getlanguage);
  console.log('language response:>>>>>>>', response.data);
  return response.data;
}catch(error){
console.log('Language error:>>>>>>>', error.response?.data || error.message);
throw error.response?.data || error;

}
};

export const DeleteProfile = async (id) =>{
try{
  const response = await axiosInstance.delete(`${ENDPOINTS.deleteprofile}${id}`);
  console.log('delete profile response:', response.data);
  return response.data;
}catch(error){
  console.log('delete error:>>>>>>>>>>', error.response?.data || error.message);
  throw error.response?.data || error;
}
};

export const gethomescreenTemplate = async (profile_id, template_id) => {
  try {
    const response = await axiosInstance.get(
      `template?profile_id=${profile_id}&template_id=${template_id}`,
      { responseType: 'arraybuffer' }
    );

    const base64Image =
      `data:image/png;base64,` +
      Buffer.from(response.data, 'binary').toString('base64');

    return {
      status: true,
      image_url: base64Image,
    };

  } catch (error) {
    console.log('Home Screen Template Error:>>>>>>>>', error);
    throw error;
  }
};

export const getallcategory = async() =>{
try{
  const response = await adminAxios.get(ENDPOINTS.getallcategory);
  console.log('get all cateogories>>>>>>',response.data);
  return response.data;
}catch(error){
  console.log('error in all categories>>>>>',error);
  throw error;
}
};
