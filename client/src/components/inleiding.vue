<template>
    <div>
        <div class="row">
            <div class="col-10 mx-auto">
                <p class="text">
                    {{text}}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    body {
        background-color: $pink-color;
    }

    .text {
        color: $white-color;
        line-height: $line-height;
        font-size: $plain-text;
    }
</style>

<script>
import PageService from '../api'

export default {
    data() {
        return {    
            message: '',
            pages: [],
            text: '',
            error: ''
        }
    },
   async created() {
        this.fetchPageData(this.$route.params.title);
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
    },
}
</script>
