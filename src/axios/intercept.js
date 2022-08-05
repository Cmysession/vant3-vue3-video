/**
 * 请求拦截器
 */
import axios from 'axios';
const axiosIntercept = axios.create();


/**
 * 请求拦截器
 */
axiosIntercept.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log('请求拦截器')
        return Promise.error(error);
    })

/**
 *  返回数据拦截
 */
axiosIntercept.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        }

    },
    error => {
        console.log('返回数据拦截')
        console.log(error)
    }
);

export default axiosIntercept