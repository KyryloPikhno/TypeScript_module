import {axiosService} from "./axios.service";
import {AxiosResponse} from "axios";



const userService = {
    getAll:():Promise<AxiosResponse>=> axiosService.get('/users'),
    getById:(id:number) => axiosService.get('/users'+id)
}

export {
    userService
}

