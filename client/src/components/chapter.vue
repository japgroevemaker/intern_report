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
            <div class="col-10 mx-auto mt-2 mb-5">
                <h3 class="text-heading mb-n1" v-if="text[2]">{{text[2].heading}}</h3>
                <p v-if="text[2]" class="text">
                    {{text[2].text}}
                </p>
            </div>
        </div>

        <div class="program-slider">
            <tiny-slider ref="programSlider" v-if="programming" :center="true" :mouse-drag="true" :touch="true" :loop="false" navPosition="bottom" :controls="false" items="1.5" gutter="20" edge-padding="40" >
                <div v-for="(type, index) in programming" :key="index">
                    <div class="programming-card pt-2 px-4">
                        <div class="d-flex justify-content-around w-75 my-4 mx-auto">
                            <img class="-image" :src="'/static/chapters/icons/'+ type.image" alt="">
                            <h4 class="-title my-auto">{{type.title}}</h4>
                        </div>
                        <p class="-text">
                            {{type.text}}
                        </p>
                    </div>
                </div>
            </tiny-slider>
        </div>

        <tiny-slider ref="projectSlider" v-if="projects" :center="true" :mouse-drag="true" :touch="true" :loop="false" navPosition="bottom" :controls="false" items="1.5" gutter="20" edge-padding="40" >
            <div v-for="(project, index) in projects" :key="index">
                <router-link :to="{name: 'project', params: { title: project.title } }">
                    <div class="project-image position-relative" :style="'background-image: url(/static/projects/' + project.image + ')'">
                        <div class="-box position-absolute">
                                <h2 class="-title mt-n2">
                                    {{project.title}}   
                                </h2>
                                <p class="-to-chapter "> {{toProject}} <i class="fa fa-arrow-right ml-5"></i></p>
                            </div>
                    </div>
                </router-link>
            </div>
        </tiny-slider>

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
            programming: null,
            next: 'volgende',
            back: 'terug',
            toProject: 'naar project',
            chapter: [],
            projects: null
        }
    },

    components: {
        'tiny-slider': VueTinySlider
    },

     created() {
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
                    
                    this.nextLink = response.data[0].next
                    this.prevLink = response.data[0].back

                    if(response.data[0].text){
                        this.text = response.data[0].text
                    }

                    if(response.data[0].programming){
                        this.programming = response.data[0].programming
                        console.log('There is data')
                    }

                    if(response.data[0].images){
                        this.images = response.data[0].images
                    }

                    if(response.data[0].projects){
                        this.projects = response.data[0].projects
                    }

                }).catch(error => {
                    this.message = error
             })
         },

         getSlider(){
             const slider = document.querySelector('.tns-slider');
             console.log(slider)
         }

        //  sliderInfo(){
        //      console.log(this.$refs)
        //  }
    },

    // computed: {
    //     getImages: {
    //         get: function() {
    //             console.log(this.images.length)
    //              return this.images.length > 0 === this.images.length;
    //         }
    //     }
    // },

    // watch: {
    //     getImages: {
    //         initSlider(){
    //             if(this.getImages){
    //                 const slider = this.$refs.tinySlider
    //                 slider.init()
    //             }
    //         }
    //     }
    // }


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

    .programming-card {
        background-color: $grey-color;
        border-radius: 10px;

        .-image {
            width: 40px;
        }

        .-title {
            color: $pink-color;
            font-weight: $fw-bold;
            font-size: 18px;
        }

        .-text {
            color: $white-color;
            line-height: $line-height;
        }
    }

    .project-image {
        padding-bottom: 170%;
        background-size: cover;
        background-position: center;

        .-box {
            bottom: 30px;
            left: 30px;
        }

        .-title {
            color: $white-color;
            font-weight: $fw-bold;
            font-size: 35px;
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
    }
</style>