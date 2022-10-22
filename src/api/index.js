import axios from "axios";

export default axios.create({
    baseURL: `http://ec2-35-175-38-36.compute-1.amazonaws.com:8080/`                     
});