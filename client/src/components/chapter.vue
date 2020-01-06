<template>
    <div>
        <div class="row mb-5">
            <div class="col-10 mx-auto">
                <div class="header-image w-100" :style="'background-image: url(/static/chapters/' + headerImage + ')'">
                    <div class="-box position-absolute">
                            <h4 class="-title-caption">
                                {{titleCaption}}
                            </h4>
                            <h2 class="-title mt-n2">
                                {{title}}   
                            </h2>
                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-10 mx-auto">
                <p class="caption">{{caption}}</p>
            </div>

            <div class="col-10 mx-auto mt-5">
                <h3 class="text-heading" v-if="text[0]">{{text[0].heading}}</h3>
                <p v-if="text[0]" class="text">
                    {{text[0].text}}
                </p>
            </div>            
        </div>

        <tiny-slider ref="tinySlider" v-if="images" :center="true" :mouse-drag="true" :touch="true" :loop="false" navPosition="bottom" :controls="false" items="1.5" gutter="20" edge-padding="40" >
            <div v-for="(image, index) in images" :key="index">
                <div class="slider-image" :style="'background-image: url(/static/chapters/' + image + ')'"></div>
            </div>
            
        </tiny-slider>

        <div class="row">
            <div class="col-10 mx-auto mt-2 mb-5">
                <h3 class="text-heading mb-n1" v-if="text[1]">{{text[1].heading}}</h3>
                <p v-if="text[1]" class="text">
                    {{text[1].text}}
                </p>
            </div>
        </div>
        

        <div class="row">
            <div class="col-10 d-flex justify-content-between mx-auto">
                <router-link :to="{name: 'chapter', params: { title: prevLink } }" replace>
                    <p class="-to-chapter my-4"> <i class="fa fa-arrow-left mr-3"></i> {{back}}</p>
                </router-link>
                <router-link :to="{name: 'chapter', params: { title: nextLink } }" replace>
                    <p class="-to-chapter my-4"> {{next}} <i class="fa fa-arrow-right ml-3"></i></p>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import PageService from '../api'
import VueTinySlider from 'vue-tiny-slider';

export default {
    data() {
        return {
            headerImage: '',
            titleCaption: '',
            title: '',
            caption: '',
            text: [],
            images: null,
            nextLink: '',
            prevLink: '',
            next: 'volgende',
            back: 'terug',
            chapter: []
        }
    },

    components: {
        'tiny-slider': VueTinySlider
    },

    async created() {
        console.log('created')
        this.fetchChapterData(this.$route.params.title)
        // this.searchInLowerCase(this.fetchChapterData(this.$route.params.title))
    },

    methods: {
        fetchChapterData(chapterId) {
            PageService.getChapters(chapterId)
               .then(response => {
                    this.chapter = response.data
                    this.headerImage = response.data[0].headerImage
                    this.titleCaption = response.data[0].titleCaption
                    this.title = response.data[0].title
                    this.caption = response.data[0].caption
                    this.text = response.data[0].text
                    this.nextLink = response.data[0].next
                    this.prevLink = response.data[0].back

                    if(response.data[0].images){
                        this.images = response.data[0].images
                    }
                }).catch(error => {
                    this.message = error
             })
         },
    },


}
</script>

<style lang="scss">
    .header-image {
        background-color: $pink-color;
        background-size: cover;
        background-position: center;
        padding-bottom: 170%;

        .-box {
            bottom: 30px;
            left: 30px;
        }

        .-title-caption {
            color: $white-color;
            font-size: 15px;
        }

        .-title {
            color: $white-color;
            font-weight: $fw-bold;
            font-size: 40px;
        }
    }

    .caption {
        color: $pink-color;
        font-weight: $fw-bold;
        font-size: 18px;
        line-height: $line-height;
    }

    .text-heading {
        color: $pink-color;
        font-size: 18px;
        font-weight: $fw-bold;
    }

    .text {
        font-size: 18px;
        line-height: $line-height;
        color: $white-color;
    }

    .slider-image {
        padding-bottom: 80%;
        background-size: cover;
        background-position: center;
    }

    .-to-chapter {
            font-size: 15px;
            color: $pink-color;
            font-weight: $fw-bold;
        }
</style>