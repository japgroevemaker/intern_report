<template>
    <div>
        
        <div>
            <div 
            class="page"
            v-for="(page, index) in pages" :key="index"
            >
            <h1>{{page.title}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import PageService from '../api'

export default {
    data() {
        return {    
            message: '',
            pages: [],
            error: ''
        }
    },
   async created() {
        this.fetchPageData(this.$route.params.title);
        // const id = this.$route.params.id
        // try {
        //     this.pages = await PageService.all()
        // } catch(err) {
        //     this.error = err.message
        // }

        
        // const id = this.$route.params.id
        // const page = await this.$http.get(`http://localhost:3000/api/pages/${id}`)
        // this.pages = page.data
    },
    // methods: {
    //     fetchPageData(pageId) {
    //         PageService.getPage(pageId)
    //             .then(response => {
    //                 this.page = response.data
    //             }).catch(error => {
    //                 this.error = error
    //             })
    //     }
    // },
    methods: {
        fetchPageData(pageId) {
            PageService.all(pageId)
                .then(response => {
                    this.pages = response.data
                }).catch(error => {
                    this.message = error
                })
        }
    },
}
</script>