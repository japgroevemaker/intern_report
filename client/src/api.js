import axios from 'axios'

const pages = 'http://localhost:3000/api/pages';
const chapters = 'http://localhost:3000/api/chapters';
const projects = 'http://localhost:3000/api/projects';

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
