<template>
    <div>
        
    </div>
</template>

<script>
import PageService from '../api'
export default {
    data() {
        return {
            chapter: []
        }
    },
    async created() {
        this.fetchChapterData(this.$route.params.title)
    },

    methods: {
        fetchChapterData(chapterId) {
            PageService.getChapters(chapterId)
               .then(response => {
                    this.chapter = response.data
                }).catch(error => {
                    this.message = error
             })
         },
    }
}
</script>