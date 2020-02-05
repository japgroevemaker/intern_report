<template>
    <div>
        <div class="container my-5">
            <div class="row pb-3">
                <div class="col-10 mx-auto">
                    <p class="plain-text">
                        {{text}}
                    </p>
                </div>
            </div>
        
            <div class="row">
                <div class="col-10 mx-auto">
                    <div v-if="images">
                        <p class="plain-text">
                            {{instaCaption}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <tiny-slider v-bind="sliderConfig" v-if="images">
            <div v-for="(image, index) in images" :key="index">
                <div class="-image" :style="'background-image: url(' + image.node.display_url + ')'"></div>
            </div>
        </tiny-slider>

    </div>
</template>

<script>
import PageService from '../api'
import VueTinySlider from 'vue-tiny-slider';
import axios from 'axios';

export default {
    data() {
        return {    
            message: '',
            instaCaption: 'Een foto zegt meer dan 1000 woorden zeggen ze altijd. Daarom hieronder een kleine greep uit mijn Instagram tijdlijn.',
            pages: [],
            images: null,
            text: '',
            error: '',
            sliderConfig: {},
            amount: 20
        }
    },

    components: {
        'tiny-slider': VueTinySlider,
    },

      mounted() {
        this.sliderConfig = {
            center: true,
            mouseDrag: true,
            touch: true,
            loop: false,
            autoplay: false,
            nav: false,
            controls: false,
            swipeAngle: 45,
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

    created() {
        this.fetchPageData(this.$route.params.page)
        this.changeBackground()

        if(this.$route.params.page == 'over mij'){
            this.getInsta()
        }
    },

    methods: {
        changeBackground(){
            document.body.style = 'background-color: $pink-color !important;'
        },

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

        getInsta(){
             axios.get(`https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables=%7B%22id%22:%22229260440%22,%22first%22:%22${this.amount}%22%7D`)
                .then(response => {
                        this.images = response.data.data.user.edge_owner_to_timeline_media.edges
                }).catch(err => {
                    this.message = err;
                })
        }
    },
}
</script>

<style scoped lang="scss">
    body {
        background-color: $pink-color;
    }

    .-image {
        padding-bottom: 100%;
        background-size: cover;
        background-position: center;
    }
</style>