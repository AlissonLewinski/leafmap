import axios from 'axios'
import {removeAccents} from './util'

const API_URL = process.env.REACT_APP_API_URL

export function fetchPlants(categoryName) {
    if(!categoryName || categoryName === '' || categoryName === '/' || categoryName === 'Todas' || categoryName === 'todas') {
        return axios(`${API_URL}/plants`)
    } else {
        return axios(`${API_URL}/plants/c/${categoryName}`)
    }
}

export function fetchPlant(plantName) {
    plantName = removeAccents(plantName.toLowerCase().replaceAll('%20', '-'))
    return axios(`${API_URL}/plants/n/${plantName}`)
}

export function fetchCategories() {
    return axios(`${API_URL}/categories`)
}