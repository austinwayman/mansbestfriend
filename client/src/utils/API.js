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

  }

};

