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

        <keep-alive>
            <tiny-slider ref="tinySlider" :mouse-drag="true" :loop="false" navPosition="bottom" :controls="false" items="1.5" edge-padding="30" gutter="15" :auto-init="false">
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
        </keep-alive>

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
            chapters: [],
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
        this.rebuildSlider()
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

    computed: {
        startSlider(){
            const slider = this.$refs.tinySlider;
            return slider.init()
        },

        rebuildSlider(){
             const slider = this.$refs.tinySlider;
            return slider.rebuild()
        }
    }
}
</script>

<style lang="scss">
    @import 'tiny-slider/src/tiny-slider';

    .tns-outer {
        margin-right: -15px;
    }

    .tns-nav {
        margin: 20px auto;
        width: 30%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        .tns-nav-active {
            background-color: #2C2C2E;
            width: 14px;
            height: 14px;
            transition: all .2s ease-in;
        }

        button {
            border: none;
            width: 12px;
            height: 12px;
            background-color: #1C1C1E;
            border-radius: 50%;
            transition: all .2s ease-in;
        }

        button:focus {
            outline: none;
        }
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