import axios from 'axios';

const axiosServices = axios.create({ baseURL: 'http://localhost:8002' });

export default axiosServices;