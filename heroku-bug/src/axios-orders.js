import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bugtracker-6248e.firebaseio.com/'
})

export default instance