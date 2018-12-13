

import axios from "axios";


export default {
    getLostAnimals: function (query) {
        return axios.get("/lostanimals" + query)

    },
    
    postLostAnimal: function (postObj) {
        return axios.post("/lostanimals" + postObj)
    }

}

