import request from "./request";
import request_two from "./request_two";
import qs from "qs";



export  function api(method,url, data = {}) {
  var post = {
    url: url,
    method: method,
  };
  if (url == "storage.upload" || url === "storage.multiupload") {
    post.headers = { "Content-Type": "multipart/form-data" };
    post.data = data;
  }  else {
    var method = method.toLowerCase();
    if (method == "post") {
      post.data = qs.stringify(data);
    } else {
      post.post = data;
    }
  }

  return request(post);
}
export  function api1(method,url, data = {}) {
  var post = {
    url: url,
    method: method,
  };
  if (url == "storage.upload" || url === "storage.multiupload") {
    post.headers = { "Content-Type": "multipart/form-data" };
    post.data = data;
  }  else {
    var method = method.toLowerCase();
    if (method == "post") {
      post.data = qs.stringify(data);
    } else {
      post.post = data;
    }
  }

  return request_two(post);
}
