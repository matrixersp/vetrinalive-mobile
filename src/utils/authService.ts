import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_API_URL} from 'utils/constants';

export type User = {
  id: number;
  fullName: string;
  email: string;
  token: string;
};

export type SignInValues = {
  email: string;
  password: string;
};

export type SignUpValues = {
  fullName: string;
  email: string;
  password: string;
};

export const authService = {
  signUp: (values: SignInValues) => {
    return axios.post(`${BASE_API_URL}/users`, values);
  },
  signIn: (values: SignInValues) => {
    return axios.post(`${BASE_API_URL}/auth`, values);
  },
  getCurrentUser: async () => {
    const token = await getToken();
    if (!token) {
      return null;
    }

    return axios.get(`${BASE_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  signOut: async () => {
    console.log('signOut');
    return await AsyncStorage.clear();
  },
};

async function getToken() {
  const user = await AsyncStorage.getItem('user');
  const parsedUser = JSON.parse(user || '{}');
  return parsedUser.token;
}
