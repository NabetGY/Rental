import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'



const baseURL = 'http://127.0.0.1:8000'


let token = localStorage.getItem('token')
let refreshToken = localStorage.getItem('refreshToken')
//let user = localStorage.getItem('user')
//let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const rentalApi = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
    }
})

rentalApi.interceptors.request.use(async req => {
    if(refreshToken){
        if(token){
            token = localStorage.getItem('token')
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
    }
    return req
})

/* rentalApi.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
        const originalConfig = err.config;
        console.log('congig', originalConfig)

        const tokenDecode = jwt_decode(token)
        const isExpired = dayjs.unix(tokenDecode.exp).diff(dayjs()) < 1;
        console.log(isExpired)

            if (originalConfig.url !== "/login" && err.response) {
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        const rs = await axios.post(`${baseURL}/api/token/refresh/`, 
                        {
                            refresh: refreshToken
                        }
                        )
                        const {  access, refresh  } = rs.data

                        localStorage.setItem('token', access)
                        localStorage.setItem('refreshToken', refresh)

                        const resp = await store.dispatch('auth/setTokens', token, refresh, user)
                        console.log('resp=',resp)
                        err.config.headers["Authorization"] = `Bearer ${token}`

                        return new Promise((resolve, reject) => 
                        {
                            axios.request(originalConfig).then(response => {
                            resolve(response)
                            }).catch((err) => {
                                reject(err);
                            })
                        })
                    } 
                    catch (_error) {
                        return Promise.reject(_error)
                    }
                }
            }
        

      return Promise.reject(err)
    }
) */



export default rentalApi;




 
 
 
