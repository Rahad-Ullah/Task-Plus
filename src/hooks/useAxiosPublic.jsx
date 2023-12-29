import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-plus-backend.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;