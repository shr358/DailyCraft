
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const axiosInstance = axios.create({
  baseURL:  'http://13.126.105.138:3003/api/v1/',

});

export const adminAxios = axios.create({
  baseURL: 'http://13.126.105.138:3003/api/',
});

axiosInstance.interceptors.request.use(async (config) => {

  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

adminAxios.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
