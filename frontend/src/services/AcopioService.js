import axios from "axios";

const API_URL = "http://localhost:8080/acopios";

class AcopioService{
    
    obtenerAcopios(){
        return axios.get(API_URL);
    }

    guardarData(file){
        return axios.post(API_URL, file);
    }
}

export default new AcopioService()