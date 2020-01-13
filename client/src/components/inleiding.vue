<template>
    <div>
        <div class="container my-5">
            <div class="row pb-5">
                <div class="col-10 mx-auto">
                    <p class="plain-text">
                        {{text}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    body {
        background-color: $pink-color;
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
    created() {
        this.fetchPageData(this.$route.params.pageId);
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
