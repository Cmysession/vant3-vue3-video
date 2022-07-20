import CryptoJS from 'crypto-js/crypto-js'
const KEY = CryptoJS.enc.Utf8.parse("1234567890ABCDEF");//  密钥        长度必须为16位
const IV = CryptoJS.enc.Utf8.parse("123456");           //  初始向量    长度随意

/**
 *  文本加密
 * @param {*} str 
 * @param {*} keyStr 
 * @param {*} ivStr 
 * @returns 
 */
export function setData(str, keyStr, ivStr) {

    if (typeof str === 'object') {
        str = JSON.stringify(str)
    }

    let key = KEY
    let iv = IV

    if (keyStr && ivStr) {
        key = CryptoJS.enc.Utf8.parse(keyStr);
        iv = CryptoJS.enc.Utf8.parse(ivStr);
    }

    let srcs = CryptoJS.enc.Utf8.parse(str);
    let encrypt = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,            //这里可以选择AES加密的模式
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypt.ciphertext);
}

/**
 * 文本解蔽
 * @param {*} str 
 * @param {*} keyStr 
 * @param {*} ivStr 
 * @returns 
 */
export function getData(str, keyStr, ivStr) {
    let key = KEY
    let iv = IV

    if (keyStr && ivStr) {
        key = CryptoJS.enc.Utf8.parse(keyStr);
        iv = CryptoJS.enc.Utf8.parse(ivStr);
    }

    let base64 = CryptoJS.enc.Base64.parse(str);
    let src = CryptoJS.enc.Base64.stringify(base64);

    let decrypt = CryptoJS.AES.decrypt(src, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,            //这里可以选择AES解密的模式
        padding: CryptoJS.pad.Pkcs7
    });

    let decryptedStr = (decrypt.toString(CryptoJS.enc.Utf8)).toString();
    try {
        decryptedStr = JSON.parse(decryptedStr)
    } catch (e) {
        return decryptedStr;
    }
    return decryptedStr;

}

/**
 * 储存缓存数据
 * @param {*} key 
 * @param {*} value 
 */
export function setItem(key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}

/**
 * 获取缓存数据
 * @param {*} key 
 * @param {*} value 
 */
export function getItem(key) {
    let value = window.localStorage.getItem(key)
    try {
        value = JSON.parse(value)
    } catch (e) {
        return value;
    }
    return value;
}

/**
 * 储存临时换成
 * @param {*} key 
 * @param {*} value 
 */
export function setSessionItem(key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.sessionStorage.setItem(key, value)
}

/**
 * 获取临时换成
 * @param {*} key 
 * @returns 
 */
export function getSessionItem(key) {
    let value = window.sessionStorage.getItem(key)
    try {
        value = JSON.parse(value)
    } catch (e) {
        return value;
    }
    return value;
}