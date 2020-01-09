<template>
    <div>
        <div class="container mt-5">
        <div class="row">
            <div class="col-10 text-center mx-auto mb-3">
                <p class="plain-text text-left mb-5">
                    {{text}}
                </p>
                <router-link :to="{ name: 'inleiding', params: { title: 'inleiding'}}"> <span class="read-more text-center"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </span> </router-link>
            </div>
        </div>
        
        <div class="clearfix my-5"></div>

    
        </div>
            <tiny-slider ref="tinySlider" v-if="chapters" v-bind="sliderConfig">
                <div v-for="(chapter, index) in chapters" :key="index">
                    <router-link :to="{name: 'chapter', params: { title: chapter.title } }">
                    <div @click="backToTop" class="chapter-image position-relative" :style="{'background-image': 'url(./static/chapters/' + chapter.image + ')'}">
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

     mounted() {
        this.sliderConfig = {
            center: true,
            mouseDrag: true,
            touch: true,
            loop: false,
            navPosition: 'bottom',
            controls: false,
            // swipeAngle: 45,
            items: 1.5,
            gutter: 20,
            edgePadding: 40,
            responsive: {
                768: {
                    items: 2.7,
                    gutter: 30,

                }
            }
        }
    },


    methods: {
        backToTop(){
            window.scrollTo(0, 0);
        },

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

    .onload-enter {
        opacity: 0;
        transform: translateY(100px)
    }

    .onload-enter-active {
        transition: all .35s ease-in;
    }

    .onloadTwo-enter {
        opacity: 0;
        transform: translateY(100px)
    }

    .onloadTwo-enter-active {
        transition: all .35s ease-in;
    }

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

        @include md {
            // width: 70%;
            margin: auto;
            padding-bottom: 70%;
        }

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