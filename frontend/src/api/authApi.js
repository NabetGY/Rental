
import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'


const baseURL = 'http://127.0.0.1:8000'

let token = localStorage.getItem('token')
let refreshToken = localStorage.getItem('refreshToken')
let user = localStorage.getItem('user')
//let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const authApi = axios.create({
    baseURL,
});

authApi.interceptors.request.use(async req => {
    if(token){
        authTokens = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
        req.headers.Authorization = `Bearer ${token}`
    }

    const user = jwt_decode(token)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if(!isExpired) return req

    const response = await axios.post(`${baseURL}/api/token/refresh/`, {
        refresh: refreshToken
      });

    
    
    const {  access, refresh  } = response.data
    

    localStorage.setItem('token', access)
    localStorage.setItem('refreshToken', refresh)
    req.headers.Authorization = `Bearer ${access}`
    return req
})


export default authApi;