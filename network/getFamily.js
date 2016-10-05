import {servicesBaseUrl} from '../config'

const getFamily = (id) => fetch(`${servicesBaseUrl}/families/${encodeURIComponent(id)}`)
    .then(response => response.json())

export default getFamily
