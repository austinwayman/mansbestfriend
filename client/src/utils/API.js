import axios from "axios";


export default {
  animalPosts: function(query) {
    return axios.get("/forum/" + query);
  },

  getThisPost: function(query){
        return axios.get("/thisPost/" + query);
  },

  postThread: function(postObj){
      return axios.post("/api/threads", postObj)
  }

};

