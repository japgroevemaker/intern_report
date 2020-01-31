<template>
    <div>
        <div class="container mt-5">
        <div class="row">
            <div class="col-10 text-center mx-auto mb-3">
                <p class="plain-text text-left mb-3 mb-md-5">
                    {{caption}}
                </p>
                <router-link :to="{ name: 'inleiding', query: { name: 'inleiding'}}"> <span class="read-more montserrat text-center"> {{readMore}} <i class="fa fa-arrow-right ml-5"></i> </span> </router-link>
            </div>
        </div>
        
        <div class="clearfix my-4 my-md-5"></div>
    
        </div>
            <tiny-slider ref="tinySlider" v-if="chapters" v-bind="sliderConfig">
                <div v-for="(chapter, index) in chapters" :key="index">
                    <router-link :to="{name: 'chapter', query: { name: chapter.title } }">
                    <div class="chapter-image position-relative" :style="{'background-image': 'url(./static/chapters/' + chapter.image + ')'}">
                        <div class="-box position-absolute">
                            <h4 class="-title-caption -smaller-caption ml-4">
                                {{chapter.titleCaption}}
                            </h4>
                            <h2 class="-title -smaller mt-n2">
                                {{chapter.title}}   
                            </h2>
                            <p class="-to-chapter mt-3 montserrat"> {{toChapter}} <i class="fa fa-arrow-right ml-5"></i></p>
                        </div>
                    </div>
                    </router-link>
                </div>
            </tiny-slider>
        
    </div>
</template>

<script>
import PageService from '../api'
import VueTinySlider from 'vue-tiny-slider';

export default {
    data() {
        return {    
            title: '',
            caption: 'Mijn stageperiode heb ik gelopen bij Immense. Immense is een full service internetbureau. Full service wil zeggen dat hier het hele proces van website creatie doorlopen wordt. Van het maken van een ontwerp tot het creëren van het CMS(Content Management Systeem) wat achter de website hangt tot het maken van een volledige online strategie tot het live zetten van de website, bij Immense gebeurd het allemaal.',
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

    created() {
        this.checkFooter()
        this.fetchPageData('home');
        this.backToTop();
    },

    mounted() {
        this.sliderConfig = {
            center: true,
            mouseDrag: true,
            lazyload: true,
            touch: true,
            loop: false,
            navPosition: 'bottom',
            controls: false,
            items: 1.5,
            gutter: 20,
            edgePadding: 40,
            responsive: {
                768: {
                    items: 2.5,
                    gutter: 30,
                },
                992: {
                    items: 3.6,
                    gutter: 30,
                }
            }
        }
    },

    methods: {
        checkFooter(){
            let footer = document.querySelector('footer')
           if(footer.classList.contains('positioning')){
               console.log('removed class')
               footer.classList.remove('positioning')
           }
        },

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

        i {
            transition: all .2s;
        }

        @include md {
            &:hover {
                i {
                    transition: all .2s;
                    transform: translateX(10px)
                }
            }
        }
    }
    
    .chapter-image {
        background-color: $pink-color;
        background-size: cover;
        background-position: center;
        padding-bottom: 170%;
        transition: all 0.2s;

        i {
            transition: all 0.2s;
        }

        @include md {
            &:hover {
                transition: all 0.2s;
                transform: translateY(-10px);

                i {
                    transition: all .2s;
                    transform: translateX(10px)
                }

            }
        }

        // make title on home page smaller
        .-smaller {
            @include md {
                font-size: 30px !important;
            }

            @include xl {
                font-size: 40px !important;
            }
        }

        .-smaller-caption {
            @include md {
                font-size: 15px !important;
            }

            // @include xl {
            //     font-size: 20px !important;
            // }
        }

        @include xl {
            // width: 70%;
            margin: auto;
            padding-bottom: 100%;
        }

        .-box {
            bottom: 30px;
            left: 30px;
        }

        .-to-chapter {
            font-size: 13px;
            color: $pink-color;
            font-weight: $fw-bold;
        }
    }
</style>