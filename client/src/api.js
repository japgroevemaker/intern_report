import axios from 'axios'

const pages = 'api/pages'
const chapters = 'api/chapters'
const projects = 'api/projects'

export default {
    getPages(pagina) {
        return axios.get(`${pages}/${pagina}`)
    },

    getAllChapters() {
        return axios.get(`${chapters}/`)
    },

    getChapters(chapter) {
        return axios.get(`${chapters}/${chapter}`)
    },

    getProject(project){
        return axios.get(`${projects}/${project}`)
    }
}
