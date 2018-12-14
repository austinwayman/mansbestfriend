import axios from "axios";


export default {
  animalInitialPosts: function(query) {
    return axios.get("/forum/" + query);
  },

  animalChosenPost: function (animal, category){
    return axios.get("/forum/" + animal + "/" + category)
  },

  getThisPost: function(query){
        return axios.get("/thisPost/" + query);
  },

  postThread: function(postObj){
      return axios.post("/api/threads", postObj)
  },

  postComment: function(route, postObj, id){
    return axios.post("/api/" + route + id, postObj);
  },

  signUp : function(userInfo){
    return axios.post("/v1/signup", userInfo)
  },

  signIn: function (userInfo){
    return axios.post("/v1/signin", userInfo)
  },

  checkAuth: function (token){
    return axios.get("/v1/protected", token)

  }

};

