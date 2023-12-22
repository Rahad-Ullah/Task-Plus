import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTasks = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()

    const {data: taskList=[], refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`)
            return res.data;
        }
    })
    
    return [taskList, refetch]
};

export default useTasks;