<template>
    <div>
        
        <div class="row">
            <div class="col-10 text-center mx-auto mb-3">
                <p class="-caption text-left mb-5">
                    {{text}}
                </p>
                <router-link :to="{ name: 'inleiding', params: { title: 'inleiding'}}"> <span class="read-more text-center"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </span> </router-link>
            </div>
        </div>
        
        <div class="clearfix my-5"></div>

        
            <tiny-slider ref="tinySlider" v-if="chapters" :touch="true" :lazyload="true" :center="true" :mouse-drag="true" :loop="false" navPosition="bottom" :controls="false" items="1.5" edge-padding="40" gutter="20">
                <div v-for="(chapter, index) in chapters" :key="index">
                    <router-link :to="{name: 'chapter', params: { title: chapter.title } }">
                    <div class="chapter-image position-relative" :style="{'background-image': 'url(./static/chapters/' + chapter.image + ')'}">
                        <div class="-box position-absolute">
                            <h4 class="-title-caption">
                                {{chapter.titleCaption}}
                            </h4>
                            <h2 class="-title mt-n2">
                                {{chapter.title}}   
                            </h2>
                            <p class="-to-chapter mt-5"> {{toChapter}} <i class="fa fa-arrow-right ml-5"></i></p>
                        </div>
                    </div>
                    </router-link>
                </div>
            </tiny-slider>
       

        <div class="clearfix my-5 "></div>
    </div>
</template>

<script>
import PageService from '../api'
import VueTinySlider from 'vue-tiny-slider';

export default {
    data() {
        return {    
            title: '',
            pages: [],
            chapters: null,
            readMore: 'Lees hele inleiding',
            toChapter: 'naar hoofdstuk',
            text: '',
            error: ''
        } 
    },
    components: {
        'tiny-slider': VueTinySlider,
    },

    async created() {
        this.fetchPageData('home');
        // this.rebuildSlider()
    },

    methods: {
        fetchPageData(pageId) {
            PageService.getPages(pageId)
                .then(response => {
                    this.title = response.data[0].title
                    this.pages = response.data
                    this.chapters = response.data[0].chapters
                    this.text = response.data[0].text
                }).catch(error => {
                    this.message = error
                })
        },
    },
}
</script>

<style lang="scss">
    // @import 'tiny-slider/src/tiny-slider';

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

    .chapter-image {
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

        .-to-chapter {
            font-size: 13px;
            color: $pink-color;
            font-weight: $fw-bold;
        }
    }
</style>