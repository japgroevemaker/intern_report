import axios from 'axios'

const pages = 'http://localhost:3000/api/pages'
const chapters = 'http://localhost:3000/api/chapters'

export default {
    getPages(pagina) {
        return axios.get(`${pages}/${pagina}`)
    },

    getAllChapters() {
        return axios.get(`${chapters}/`)
    },

    getChapters(chapter) {
        return axios.get(`${chapters}/${chapter}`)
    }
}
