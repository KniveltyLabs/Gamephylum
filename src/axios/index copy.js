
 import axios from "axios";
 import qs from "qs";
 const URL_PREFIX = "/api/";
 axios.defaults.timeout = 100000;
 axios.defaults.baseURL = URL_PREFIX;
 
 /**
  * http request 
  */
 axios.interceptors.request.use(
   (config) => {
     config.data = JSON.stringify(config.data);
     config.headers = {
       "Content-Type": "application/json;charset=UTF-8",
     };
     return config;
   },
   (error) => {
     return Promise.reject(error);
   }
 );
 
 /**
  * http response 
  */
 axios.interceptors.response.use(
   (response) => {
     if (response.data.errCode === 2) {
       console.log("过期");
     }
     return response;
   },
   (error) => {
     console.log("请求出错1：", error);
   }
 );
 
 /**
  * get
  * @param url  
  * @param params  
  * @returns {Promise}
  */
 export function get(url, params = {}) {
   return new Promise((resolve, reject) => {
     axios.get(url, {
         params: params,
       }).then((response) => {
         landing(url, params, response.data);
         resolve(response.data);
       })
       .catch((error) => {
         reject(error);
       });
   });
 }
 
 /**
  * post
  * @param url
  * @param data
  * @returns {Promise}
  */
 
 export function post(url, data={}) {
   return new Promise((resolve, reject) => {
       console.log(qs.stringify(data))
     axios.post(url, qs.stringify(data)).then(
       (response) => {
         resolve(response.data);
       },
       (err) => {
         reject(err);
       }
     );
   });
 }
 
 /**
  * patch
  * @param url
  * @param data
  * @returns {Promise}
  */
 export function patch(url, data = {}) {
   return new Promise((resolve, reject) => {
     axios.patch(url, data).then(
       (response) => {
         resolve(response.data);
       },
       (err) => {
         msag(err);
         reject(err);
       }
     );
   });
 }
 
 /**
  * put
  * @param url
  * @param data
  * @returns {Promise}
  */
 
 export function put(url, data = {}) {
   return new Promise((resolve, reject) => {
     axios.put(url, data).then(
       (response) => {
         resolve(response.data);
       },
       (err) => {
         msag(err);
         reject(err);
       }
     );
   });
 }
 
 export default function (fecth, url, param) {
   let _data = "";
   return new Promise((resolve, reject) => {
     switch (fecth) {
       case "get":
         console.log("begin a get request,and url:", url);
         get(url, param)
           .then(function (response) {
             resolve(response);
           })
           .catch(function (error) {
             console.log("get request GET failed.", error);
             reject(error);
           });
         break;
       case "post":
         post(url, param)
           .then(function (response) {
             resolve(response);
           })
           .catch(function (error) {
             console.log("get request POST failed.", error);
             reject(error);
           });
         break;
       default:
         break;
     }
   });
 }
 
 //error message
 function msag(err) {
   if (err && err.response) {
     switch (err.response.status) {
       case 400:
         alert(err.response.data.error.details);
         break;
       case 401:
         alert("Not Login");
         break;
 
       case 403:
         alert("Access denied");
         break;
 
       case 404:
         alert("Error requesting address");
         break;
 
       case 408:
         alert("Request timeout");
         break;
 
       case 500:
         alert("Server internal error");
         break;
 
       case 501:
         alert("Service not implemented");
         break;
 
       case 502:
         alert("Bad Gateway");
         break;
 
       case 503:
         alert("Service Unavailable");
         break;
 
       case 504:
         alert("Gateway timeout");
         break;
 
       case 505:
         alert("The HTTP version is not supported");
         break;
       default:
     }
   }
 }
 
 /**
  * 
  * @param url
  * @param params
  * @param data
  */
 function landing(url, params, data) {
   if (data.code === -1) {
   }
 }
 
 