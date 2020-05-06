import React from 'react';

import { } from "react";
const axios = require('axios').default;
// import Cookies from 'universal-cookie';

import * as AppConstants from '../utils/constants';

export default class DataService extends React.Component {
    constructor(props) {
        super(props);
        // this.cookies = new Cookies();
    }
    getHttpHeaders() {
        let authToken = this.getCookie(AppConstants.COOKIE_KEY_AUTHTOKEN);
        authToken = `${AppConstants.API_TOKEN_TYPE} ${(authToken ? authToken : AppConstants.N_A)}`;

        const empId = this.getCookie(AppConstants.COOKIE_KEY_ID);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': authToken,
            'X-Auth-Token': (empId ? empId : AppConstants.N_A)
        };
        return headers;
    };

    async asyncGetAll(type) {
        try {
            const response = await axios.get(`${AppConstants.BASE_URL}${type}`, {
                headers: this.getHttpHeaders(),
            });
            let data = [];
            console.log('asyncGetAll: response', response);
            if (response && response.status === 200) {
                data = response.data || [];
            }
            console.log('asyncGetAll: data', data);
            return data;
        } catch (error) {
            console.log('asyncGetAll: error', error);
            this.handleError(error);
            throw error;
        }
    }

    async asyncGetOne(type, id) {
        try {
            const response = await axios.get(`${AppConstants.BASE_URL}${type}/${id}`, {
                headers: this.getHttpHeaders(),
            });
            let data = [];
            console.log('asyncGetOne: response', response);
            if (response && response.status === 200) {
                data = response.data || [];
            }
            console.log('asyncGetOne: data', data);
            return data;
        } catch (error) {
            console.log('asyncGetOne: error', error);
            this.handleError(error);
            throw error;
        }
    }

    async asyncGetWithParam(type, queryParams) {
        try {
            const response = await axios.get(`${AppConstants.BASE_URL}${type}`, {
                params: queryParams,
                headers: this.getHttpHeaders(),
            });
            let data = [];
            console.log('asyncGetWithParam: response', response);
            if (response && response.status === 200) {
                data = response.data || [];
            }
            console.log('asyncGetWithParam: data', data);
            return data;
        } catch (error) {
            console.log('asyncGetWithParam: error', error);
            this.handleError(error);
            throw error;
        }
    }

    async asyncExecuteApi(id, api_path, data) {
        try {
            data.authorId = this.getCookie(AppConstants.COOKIE_KEY_ID);
            const body = JSON.stringify(data);
            let method;
            let url = `${AppConstants.BASE_URL}${api_path}`
            if (id === 'add') {
                method = 'POST';
            } else if (id === 'update') {
                method = 'PUT';
            } else {
                method = 'PUT';
                url = `${AppConstants.BASE_URL}${api_path}/${id}`
            }
            const options = {
                method: method,
                headers: this.getHttpHeaders(),
                data: body,
                url
            };
            console.log('asyncExecuteApi: options', options);
            let response = await axios(options);
            let res = [];
            console.log('asyncExecuteApi: response', response);
            if (response && response.status === 200) {
                res = response.data || [];
            }
            console.log('asyncExecuteApi: res', res);
            return res;
        } catch (error) {
            console.log('asyncExecuteApi: error', error);
            this.handleError(error);
            throw error;
        }
    }

    async encryptData(data) {
        try {
            // return CryptoJS.AES.encrypt(JSON.stringify(data), this.getEnv(AppConstants.ENV_VARS.DATA_SECRET_KEY)).toString();
        } catch (e) {
            console.log('encryptData: error', e);
        }
    }

    async decryptData(data) {
        try {
            // const bytes = CryptoJS.AES.decrypt(data, this.getEnv(AppConstants.ENV_VARS.DATA_SECRET_KEY));
            // if (bytes.toString()) {
            // return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            // }
            return data;
        } catch (e) {
            console.log('decryptData: error', e);
        }
    }

    async handleError(error) {
        switch (error.status) {
            case 0:
                this.resetCookies();
                this.goToLogin();
                console.log('Error', 'Network Error has occurred, please check with office network team !! ');
                break;
            case 400:
                console.log('Error', 'Bad Request.');
                break;
            case 401:
                console.log('Error', 'UnAuthorized access.');
                break;
            case 408:
                console.log('Error', 'Session has been expired.');
                this.goToLogin();
                break;
            case 412:
                console.log('Error', 'Invalid OAuth access token signature.');
                this.goToLogin();
                break;
            default:
                if (error && error.status) {
                    console.log('Error', `Server Error: ${error.status} ${error.statusText}`);
                } else {
                    console.log('Error', 'Server/Network Error has occurred, please contact support team.: error', error);
                }
        }
    }

    getCookie(key) {
        // let cookie = this.cookies.get(AppConstants.APP_DATA, { doNotParse: true }) // this.getDecryptedCookie();
        // console.log('getCookie: cookie', cookie)
        // cookie = cookie ? JSON.parse(cookie) : null;
        // console.log('getCookie: after cookie', cookie)
        // if (cookie) {
        //     return cookie[key] || null
        // }
    }

    setCookie(key, value) {
        // let cookie = this.cookies.get(AppConstants.APP_DATA, { doNotParse: true }) // this.getDecryptedCookie();
        // cookie = cookie ? JSON.parse(cookie) : null;
        // if (cookie) {
        //     cookie[key] = value;
        //     const appData = cookie // this.encryptData(cookie);
        //     this.cookies.set(AppConstants.APP_DATA, JSON.stringify(appData), { path: '/' });
        // } else {
        //     this.cookies.set(key, value, { path: '/' });
        // }
    }

    async getDecryptedCookie() {
    }

    async removeCookie(key) {
        // let cookie = this.cookies.get(AppConstants.APP_DATA, { doNotParse: true }) // this.getDecryptedCookie();
        // cookie = cookie ? JSON.parse(cookie) : null;
        // if (cookie) {
        //     delete cookie[key];
        //     const appData = cookie // this.encryptData(cookie);
        //     this.cookies.set(AppConstants.APP_DATA, JSON.stringify(appData), { path: '/' });
        // }
    }

    async resetCookies() {
        // this.cookies.remove(AppConstants.APP_DATA, { path: '/' });
    }

    async asyncGetSignedURLToGetObject(fileUrl) { }

    async startDownloadingAttachmentsFromS3() { }

    async viewDocument() { }

    async getFileNameFromURL(url) {
        return url.replace(/.*\//g, "");
    }

    async deleteAttachments() { }

    async deleteFileFromS3(folderName, arrayOfFiles) { }

    async asyncStartUploadingFileToS3() { }
    async asyncSecureUploadToS3(folderName, file) { }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}