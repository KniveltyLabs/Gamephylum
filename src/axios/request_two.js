/**
 * 
 */
import axios from "axios";
import qs from "qs";
// const URL_PREFIX = "http://gamephylum.java.xmublockchain.com";
let URL_PREFIX = "http://java.gamephylum.xyz/";
// if(window.location.host === 'gamephylum.xyz'){
//    URL_PREFIX = "http://java.gamephylum.xyz/";
// }else{
//    URL_PREFIX = "http://gamephylum.java.xmublockchain.com/";
// }
//  const URL_PREFIX = "/api";
axios.defaults.timeout = 100000;
axios.defaults.baseURL = URL_PREFIX;
axios.defaults.withCredentials = false;

const service = axios.create({
  // baseURL: "/api/", // api 的 base_url
  withCredentials: false,
  timeout: 100000, // request timeout
});

/**
 * http request 
 */
service.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (err) => Promise.reject(err)
);

/**
 * http response 
 */
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // console.log(route.path)
    if (res.errno === 501) {
      return res;
    } else if (res.errno === 502) {
      return res;
    }
    if (res.errno === 401) {
      return res;
    }
    if (res.errno === 402) {
      return res;
    } else if (res.errno !== 0) {
      return res.data;
    } else {
      return res.data;
    }
  },
  (error) => {
    return {
      errno: 400,
      errmsg: error.message,
    };
  }
);

let requestFunc = {
  /**
   * 
   * url 
   * data 
   * headers Overridden header information
   * timeout Overridden request timeout
   * type Override responsetype
   * isFormData Whether it is formdata - 《 requires QS Stringify converts JSON to formdata. Here, it is a key value pair converted to formdata instead of a native form submission
   */
  get: ({
    url = "",
    data = {},
    headers = {},
    isFormData = false,
    loading = true,
    type = "",
  }) => {
    let tempData = {};
    for (const key in data) {
      if (data[key] !== "") {
        tempData[key] = data[key];
      }
    }
    if (isFormData) {
      return service.get(url, {
        params: tempData,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
        responseType: type,
        headers,
        loading,
      });
    } else {
      return service.get(url, {
        params: tempData,
        responseType: type,
        paramsSerializer: (params) => {
          return qs.stringify(params, { indices: false });
        },
        headers,
        loading,
      });
    }
  },
  post: ({
    url = "",
    data = {},
    isFormData = false,
    headers = {},
    loading = true,
  }) => {
    let tempData = {};
    for (const key in data) {
      if (data[key] !== "") {
        tempData[key] = data[key];
      } else {
        tempData[key] = null;
      }
    }
    if (isFormData) {
      tempData = qs.stringify(tempData);
    }
    if (data instanceof FormData) {
      tempData = data;
    }
    return service.post(url, tempData, {
      headers,
      loading,
    });
  },
  delete: ({ url = "", data = {}, headers = {}, loading = true }) => {
    return service.delete(url, {
      params: data,
      headers,
      loading,
    });
  },
  patch: ({
    url = "",
    data = {},
    isFormData = false,
    headers = {},
    loading = true,
  }) => {
    let tempData = {};
    for (const key in data) {
      if (data[key] !== "") {
        tempData[key] = data[key];
      } else {
        tempData[key] = null;
      }
    }
    if (isFormData) {
      tempData = qs.stringify(tempData);
    }
    return service.patch(url, tempData, {
      headers,
      loading,
    });
  },
  put: ({ url = "", data = {}, headers = {}, loading = true }) => {
    return service.put(url, data, {
      headers,
      loading,
    });
  },
};
export default requestFunc;
