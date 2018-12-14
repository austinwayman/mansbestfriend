import axios from "axios";


export default {
    getLostAnimals: function (query) {
        return axios.get("/api/lost" + query)

    },
    
    postLostAnimal: function (postObj) {
        return axios.post("/api/lost" + postObj)
    },

    getFoundAnimals: function (query) {
        return axios.get("/api/found" + query)

    },
    
    postFoundAnimal: function (postObj) {
        return axios.post("/api/found" + postObj)
    }

}

