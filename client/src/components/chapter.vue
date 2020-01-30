<template>
    <div>
        <div class="container-fluid mt-5">
            <div class="row mb-5">
                <div class="col-10 mx-auto">
                    <div class="header-image w-100" :style="'background-image: url(/static/chapters/' + headerImage + ')'">
                        <div class="-box position-absolute">
                                <h4 class="-title-caption ml-4">
                                    {{titleCaption}}
                                </h4>
                                <h2 class="-title mt-n2">
                                    {{title}}   
                                </h2>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5">

            <div class="row mb-5">
                <div class="col-10 mx-auto">
                    <p class="caption">{{caption}}</p>
                </div>

                <div class="col-10 mx-auto mt-5" v-if="text[0]">
                    <div class="heading-image mb-4" v-if="text[0].image" :style="'background-image: url(/static/chapters/'+ text[0].image + ')'"></div>
                    <h3 class="text-heading open-sans mb-n1">{{text[0].heading}}</h3>
                    <p class="plain-text">
                        {{text[0].text}}
                    </p>
                </div>            
            </div>

        </div>

        <tiny-slider ref="tinySlider" v-if="images" v-bind="sliderConfig" >
            <div v-for="(image, index) in images" :key="index">
                <div class="slider-image" :style="'background-image: url(/static/chapters/' + image + ')'"></div>
            </div>
        </tiny-slider>


        <div class="container">    
            <div class="row" v-if="text[1]">
                <div class="col-10 mx-auto mt-2 mb-5">
                    <div class="heading-image mb-4" v-if="text[1].image" :style="'background-image: url(/static/chapters/'+ text[1].image + ')'"></div>
                    <h3 class="text-heading open-sans mb-n1" >{{text[1].heading}}</h3>
                    <p class="plain-text">
                        {{text[1].text}}
                    </p>
                    <p v-if="text[1].declaration" class="plain-text declaration">
                        {{text[1].declaration}}
                    </p>
                </div>
            </div>

            <div class="row" v-if="text[2]">
                <div class="col-10 mx-auto mt-2 mb-5">
                    <div class="heading-image mb-4" v-if="text[2].image" :style="'background-image: url(/static/chapters/'+ text[2].image + ')'"></div>
                    <h3 class="text-heading open-sans mb-n1">{{text[2].heading}}</h3>
                    <p class="plain-text">
                        {{text[2].text}}
                    </p>
                </div>
            </div>

            <div class="row" v-if="interview">
                <div class="col-10 mx-auto mt-2 mb-5" v-for="(piece, index) in interview" :key="index">
                    <h3 class="text-heading open-sans mb-n1">{{piece.question}}</h3>
                    <p class="plain-text mb-2">
                        {{piece.answer}}
                    </p>
                </div>
            </div>

            <div class="row" v-if="text[3]">
                <div class="col-10 mx-auto mt-2 mb-5">
                    <h3 class="text-heading open-sans mb-n1">{{text[3].heading}}</h3>
                    <p class="plain-text">
                        {{text[3].text}}
                    </p>
                </div>
            </div>

            <div class="row" v-if="goals">
                <div class="col-10 mx-auto mt-2 mb-5"  v-for="(goal, index) in goals" :key="index">
                    <h3 class="text-heading open-sans">{{goal.title}}</h3>
                    <div class="d-flex mb-4">
                        <div class="circle mr-5">
                            <img src="/static/chapters/icons/check-solid.svg" alt="">
                        </div>
                        <p class="competention my-auto">
                            {{goal.competention}}
                        </p>
                    </div>
                    <p class="plain-text">
                        {{goal.text}}
                    </p>
                    <div v-if="goal.image" class="goal-image" :style="'background-image: url(/static/chapters/' + goal.image + ')'"></div>
                    <hr>
                </div>
            </div>
        </div>

        <div class="program-slider" v-if="programming">
            <tiny-slider ref="programSlider" v-if="programming" v-bind="programSlider" >
                <div v-for="(type, index) in programming" :key="index">
                    <div class="programming-card pt-2 pb-md-3 px-4 px-md-5">
                        <div class="d-flex flex-row w-75 my-4 mx-auto">
                            <img class="-image mr-3" :src="'/static/chapters/icons/'+ type.image" alt="">
                            <h4 class="-title ">{{type.title}}</h4>
                        </div>
                        <p class="plain-text">
                            {{type.text}}
                        </p>
                    </div>
                </div>
            </tiny-slider>
        </div>

        <tiny-slider ref="projectSlider" v-if="projects" v-bind="sliderConfig" >
            <div v-for="(project, index) in projects" :key="index">
                <router-link :to="{name: 'project', query: { name: project.title } }">
                    <div class="project-image position-relative" :style="'background-image: url(/static/projects/' + project.image + ')'">
                        <div class="-box position-absolute">
                                <h2 class="-title mt-n2">
                                    {{project.title}}   
                                </h2>
                                <p class="-to-chapter montserrat"> {{toProject}} <i class="fa fa-arrow-right ml-5"></i></p>
                            </div>
                    </div>
                </router-link>
            </div>
        </tiny-slider>

        <div class="container">
            <div class="row">
                <div class="col-10 d-flex justify-content-between mx-auto">
                    <router-link :to="{name: 'chapter', query: { name: prevLink } }">
                        <p class="-to-chapter my-4 montserrat"> <i class="fa fa-arrow-left mr-3"></i> {{back}}</p>
                    </router-link>
                    <router-link  :to="{name: 'chapter', query: { name: nextLink } }" >
                        <p class="-to-chapter my-4 montserrat"> {{next}} <i class="fa fa-arrow-right ml-3"></i></p>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageService from '../api'
import VueTinySlider from 'vue-tiny-slider';

export default {
    title(){
        return `intern report - chapter ${this.pagetitle}`
    },

    data() {
        return {
            headerImage: '',
            titleCaption: '',
            title: '',
            pagetitle: '',
            caption: '',
            text: [],
            images: null,
            nextLink: '',
            prevLink: '',
            programming: null,
            goals: null,
            next: 'volgende',
            back: 'terug',
            toProject: 'naar project',
            interview: null,
            projects: null,
            sliderConfig: {},
            programSlider: {}
        }
    },

    components: {
        'tiny-slider': VueTinySlider
    },

    beforeCreate() {
         if(this.$route.query.name == undefined) {
            this.$router.push({name: '404'})
        }
    },

    created() {
        this.fetchChapterData(this.$route.query.name)
        this.backToTop()
        
    },

 mounted() {

        this.sliderConfig = {
            center: true,
            mouseDrag: true,
            touch: true,
            loop: false,
            navPosition: 'bottom',
            controls: false,
            swipeAngle: 45,
            items: 1.5,
            gutter: 20,
            edgePadding: 40,
            responsive: {
                768: {
                    items: 2,
                }
            }
        },
        this.programSlider = {
            center: true,
            mouseDrag: true,
            touch: true,
            loop: false,
            navPosition: 'bottom',
            controls: false,
            swipeAngle: 45,
            items: 1.5,
            gutter: 20,
            edgePadding: 40,
            responsive: {
                768: {
                    items: 3.2,
                    nav: false
                }
            }
        }
    },

    methods: {
        backToTop(){
            window.scrollTo(0, 0);
        },

        fetchChapterData(chapterId) {
            PageService.getChapters(chapterId)
               .then(response => {
                    const chapterData = response.data[0]
                   if(chapterData == undefined) {
                       this.$router.push({name: '404'})
                   }

                    this.headerImage = chapterData.headerImage
                    this.titleCaption = chapterData.titleCaption
                    this.title = chapterData.title
                    this.caption = chapterData.caption
                    
                    this.nextLink = chapterData.next
                    this.prevLink = chapterData.back

                    if(chapterData.text){
                        this.text = chapterData.text
                    }

                    if(chapterData.programming){
                        this.programming = chapterData.programming
                    }

                    if(chapterData.images){
                        this.images = chapterData.images
                    }

                    if(chapterData.projects){
                        this.projects = chapterData.projects
                    }

                    if(chapterData.goals) {
                        this.goals = chapterData.goals
                    }

                     if(chapterData.interview) {
                        this.interview = chapterData.interview
                    }

                }).catch(error => {
                    this.message = error
             })
         },
    },

    watch: {
        title(newValue, oldValue){
            console.log(`New value is ${newValue}`)
            console.log(`old value is ${oldValue}`)

            return this.pagetitle = newValue
        }
    },
}

</script>

<style scoped lang="scss">

.program-slider {

    .tns-slider {
        display: flex !important;
    }

    .tns-item {
        display: flex !important;
        flex-grow: 1 ;
    }
}

    .header-image {
        background-color: $pink-color;
        background-size: cover;
        background-position: center;
        padding-bottom: 170%;

        @include md {
            padding-bottom: 40%;
        }

        .-box {
            bottom: 30px;
            left: 30px;

            @include md {
                left: 100px;
            }
        }
    }

    // begeleider chapter on desktop change
    .-adjust {
        @include md {
            background-position: top !important;
        }
    }

    .declaration {
        font-weight: $fw-light;
        font-size: 15px !important;
        line-height: 25px !important;
        font-style: italic;
    }

    .circle {
        background-color: $green-color;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        text-align: center;

        img {
            width: 14px;
            color: $white-color;
        }
    }

    .goal-image {
        padding-bottom: 70%;
        background-size: cover;
        background-position: center;
    }

    .competention {
        color: $green-color;
        font-size: 12px;
        font-weight: $fw-bold;
    }

    hr {
        background-color: $grey-color;
    }

    .heading-image {
        padding-bottom: 100%;
        background-size: cover;
        background-position: center;

        @include lg {
            padding-bottom: 60%;
            background-position: top;
        }
    }

    .slider-image {
        padding-bottom: 80%;
        background-size: cover;
        background-position: center;

        @include md {
            padding-bottom: 50%;
        }
    }

    .programming-card {
        background-color: $grey-color;
        border-radius: 10px;

        .-image {
            width: 40px;
            height: 40px;
        }

        .-title {
            color: $pink-color;
            font-weight: $fw-bold;
            font-size: 18px;

            @include md {
                font-size: 25px;
            }
        }

        .-text {
            color: $white-color;
            line-height: $line-height;

            @include md {
                font-size: 20px;
                line-height: 40px !important;
            }
        }
    }

    .project-image {
        padding-bottom: 170%;
        background-size: cover;
        background-position: center;
        transition: all 0.2s;

        i {
            transition: all 0.2s;
        }

        @include md {
            padding-bottom: 70%;
            &:hover {
                transition: all 0.2s;
                transform: translateY(-10px);

                i {
                    transition: all .2s;
                    transform: translateX(10px)
                }
            }
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

    .-to-chapter {
            font-size: 15px;
            color: $pink-color;
            font-weight: $fw-bold;

            i {
            transition: all .2s;
        }

        @include md {
            &:hover {
                .fa-arrow-left {
                    transition: all .2s;
                    transform: translateX(-10px)
                }

                .fa-arrow-right {
                    transition: all .2s;
                    transform: translateX(10px)
                }
            }
        }
    }
</style>