<template>
    <div>
        <div class="row">
            <div class="col-10 text-center mx-auto">
                <p class="-caption text-left mb-5">
                    {{text}}
                </p>
                <!-- <a class="read-more" href="/pages"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </a> -->
                <router-link :to="{ name: 'inleiding', params: { title: 'inleiding'}}"> <span class="read-more text-center"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </span> </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import PageService from '../api'

export default {
    data() {
        return {    
            title: '',
            pages: [],
            chapters: [],
            readMore: 'Lees hele inleiding',
            text: '',
            error: ''
        }
    },
   async created() {
        this.fetchPageData('home');
        this.fetchChapterData();
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
    methods: {
        fetchPageData(pageId) {
            PageService.getPages(pageId)
                .then(response => {
                    this.title = response.data[0].title
                    this.pages = response.data
                    this.text = response.data[0].text
                }).catch(error => {
                    this.message = error
                })
        },

        fetchChapterData() {
            PageService.getAllChapters()
                .then(response => {
                    this.chapters = response.data
                }).catch(error => {
                    this.message = error
                })
        },
    },
}
</script>

<style lang="scss">
    .-caption {
        color: #fff;
        font-size: $plain-text;
        line-height: $line-height;
    }

    .read-more {
        color: $pink-color;
        font-weight: $fw-bold;
        margin: auto;
    }
</style>