import axios from "axios";

export function fetchDepartaments() {
    return axios.get('/departaments').then(r => r.data)
}

export function updateDepartament(departament) {
    return axios.put('/departaments/' + departament.id, departament).then(r => console.log(r.data))
}

export function removeDepartament(id) {
    return axios.delete('/departaments/' + id)
}

export function createDepartament(departament) {
    return axios.post('/departaments', departament)
}

export function fetchEmployees() {
    return axios.get('/employees').then(r => r.data)
}

export function fetchEmployee(id) {
    return axios.get('/employees/' + id).then(r => r.data)
}

export function updateEmployee(employee) {
    return axios.put('/employees/' + employee.id, employee).then(r => r.data)
}

export function removeEmployee(id) {
    return axios.delete('/employees/' + id).then(r => r.data)
}

export function createEmployee(employee) {
    return axios.post('/employees/', employee).then(r => r.data)
}