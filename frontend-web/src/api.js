import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export function fetchPlants() {
    return axios(`${API_URL}/plants`)
}