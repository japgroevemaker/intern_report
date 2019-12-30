import axios from 'axios'

const url = 'http://localhost:3000/api/pages'

export default {
    all(pagina) {
        return axios.get(`${url}/${pagina}`)
    }
}
