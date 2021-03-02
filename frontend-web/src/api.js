import axios from 'axios'
import {removeAccents} from './util'

const API_URL = process.env.REACT_APP_API_URL

let config = {
    headers: {
        Authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIsIm5hbWUiOiJNYXJzaGFsbCIsImVtYWlsIjoibWFyc2hhbGxAZ21haWwuY29tIiwiZWRpdG9yIjp0cnVlLCJhZG1pbiI6dHJ1ZSwiY3JlYXRlZF9hdCI6bnVsbCwiaWF0IjoxNjE0NzI1MDk5LCJleHAiOjE2MTYwMjEwOTl9.Guhc32GwAGn_ZF6UIpYfuLNb-owoGRJiwxDfbUwndKc',
    }
}

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

export function fetchPlantById(id) {
    return axios(`${API_URL}/plants/${id}`, {}, config)
}

export function savePlant(plant) {
    if(plant.id) {
        return axios.put(`${API_URL}/plants/${plant.id}`, plant, config)
    } else {
        delete plant.id
        return axios.post(`${API_URL}/plants`, plant, config)
    }
}

export function deletePlant(id) {
    return axios.delete(`${API_URL}/plants/${id}`)
}

export function fetchCategories() {
    return axios(`${API_URL}/categories`)
}

export function fetchCategoryById(id) {
    return axios(`${API_URL}/categories/${id}`, {}, config)
}

export function saveCategory(category) {
    if(category.id) {
        return axios.put(`${API_URL}/categories/${category.id}`, category, config)
    } else {
        delete category.id
        return axios.post(`${API_URL}/categories`, category, config)
    }
}

export function deleteCategory(id) {
    return axios.delete(`${API_URL}/categories/${id}`)
}