/* eslint-disable no-param-reassign */
import axios from 'axios';
import store from '../redux/store/store';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.0.3:8080',
	timeout: 3000,
});

export default axiosInstance;

axiosInstance.interceptors.request.use((config) => {
	const { accessToken } = store.getState().user;
	config.headers.Authorization = accessToken;

	return config;
});
