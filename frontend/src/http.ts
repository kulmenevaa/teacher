import axios from 'axios'
import store from '@/stores'

export function http() {
    const api = axios.create({
        baseURL: store.getters.getApiUrl,
        headers: {
            Authorization: `Bearer ${store.getters.getToken}`,
        }
    })

    api.interceptors.request.use((config: any) => {
        store.commit('setLoading', true)
        return config
    }, (error: any) => {
        store.commit('setLoading', false)
        store.commit('setAlert', {
            type: 'error',
            visible: true,
            message: error?.response?.data?.message,
            status: error?.response?.status
        })
        return Promise.reject(error)
    })

    api.interceptors.response.use((response: any) => {
        store.commit('setLoading', false)
        return Promise.resolve(response)
    }, (error: any) => {
        store.commit('setLoading', false)
        store.commit('setAlert', {
            type: 'error',
            visible: true,
            message: error?.response?.data?.message,
            status: error?.response?.status
        })
        return Promise.reject(error)
    })
    
    return api
}