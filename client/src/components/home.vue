<template>
    <div>
        <div class="row">
            <div class="col-10 mx-auto">
                <p class="-caption">
                    {{caption}}
                </p>
                <!-- <a class="read-more" href="/pages"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </a> -->
                <router-link :to="{ name: 'inleiding', params: { title: 'inleiding'}}"> <span class="read-more"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </span> </router-link>
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
            readMore: 'Lees hele inleiding',
            caption: '',
            error: ''
        }
    },
   async created() {
        this.fetchPageData('home');
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
            PageService.all(pageId)
                .then(response => {
                    this.title = response.data[0].title
                    this.pages = response.data
                    this.caption = response.data[0].caption
                }).catch(error => {
                    this.message = error
                })
        }
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
    }
</style>