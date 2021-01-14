import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export function fetchPlants(categoryName) {
    if(!categoryName || categoryName === '' || categoryName === '/' || categoryName === 'Todas' || categoryName === 'todas') {
        return axios(`${API_URL}/plants`)
    } else {
        return axios(`${API_URL}/plants/c/${categoryName}`)
    }
}

export function fetchCategories() {
    return axios(`${API_URL}/categories`)
}