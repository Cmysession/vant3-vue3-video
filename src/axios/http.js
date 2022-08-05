import axiosIntercept from "./intercept"
import axios from 'axios'

/**
 * 
 * @param {*} url 地址
 * @param {*} fromData 参数
 * @returns 
 */
export const post = (function (url, fromData, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, fromData, config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
})

/**
 * 
 * @param {*} url 
 * @param {*} fromData 
 * @param {*} config 
 * @returns 
 */
export const get = (function (url, fromData, config) {
    return new Promise((resolve, reject) => {
        axios.get(url, fromData, config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
})

export const axiosGet = (function (url, fromData) {

    return new Promise((resolve, reject) => {
        axiosIntercept.post(url, fromData)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
})