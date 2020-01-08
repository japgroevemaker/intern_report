<template>
    <div>

        <!-- <h4 class="twisted position-fixed">project - {{title}} </h4> -->

        <div class="row mb-5">
            <div class="col-10 mx-auto">
                <div class="header-image w-100" :style="'background-image: url(/static/projects/' + headerImage + ')'">
                    <div class="-box position-absolute">
                            <h2 class="-title mt-n2">
                                {{title}}   
                            </h2>
                        </div>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-10 mx-auto">
                <p class="caption">
                    {{caption}}
                </p>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-10 mx-auto">
                <h3 class="text-heading mb-n1">
                    {{myRole.title}}
                </h3>
                <p class="text">
                    {{myRole.text}}
                </p>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-10 mx-auto">
                <h3 class="text-heading">
                    {{tools.title}}
                </h3>
                <div class="d-flex justify-content-between">
                    <div v-for="(image, index) in tools.icons" :key="index">
                        <img class="icon" :src="'/static/projects/icons/' + image" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-10 mx-auto">
                <p v-if="text[0]" class="text">
                    {{text[0].text}}
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-10 mx-auto">
                <div v-for="(image, index) in images" :key="index">
                    <h3 class="text-heading">
                        {{image.title}}
                    </h3> 
                    <div class="project-image mb-3" :style="'background-image: url(/static/projects/' + image.image + ')'"></div>
                </div>
            </div>
        </div>
      
        <div class="row mt-3 mb-5">
            <div class="col-10 mx-auto">
                <p v-if="text[1]" class="text">
                    {{text[1].text}}
                </p>

                <a v-if="link" :href="link" class="btn btn-primary btn-block" target="blank">
                    live voorbeeld
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    import PageService from '../api'

    export default {
        data(){
            return {
                headerImage: '',
                title: '',
                caption: '',
                myRole: {},
                tools: {},
                text: [],
                images: [],
                link: null,
                projectAll: [],
                error: ''
            }
        },

        created(){
            this.fetchProjectData(this.$route.params.title)
            
        },
 

        methods: {
            fetchProjectData(projectId){
                PageService.getProject(projectId)
                    .then(response => {
                        const project = response.data[0]
                        this.projectAll = response.data

                        this.headerImage = project.headerImage
                        this.title = project.title
                        this.caption = project.caption

                        this.myRole = project.myrole
                        this.tools = project.tools

                        this.text = project.text;

                        this.images = project.images

                        this.link = project.link
                    }).catch(error => {
                        this.error = error.message
                    })
            },

        },
    }
</script>

<style lang="scss">

    // .twisted {
    //     right: -35px;
    //     top: 50%;
    //     text-transform: lowercase;
    //     color: $white-color;
    //     // font-weight: $fw-bold;
    //     font-size: 11px;
    //     transform: rotate(90deg)
    // }

    .header-image {
        background-color: $pink-color;
        background-size: cover;
        background-position: center;
        padding-bottom: 170%;

        .-box {
            bottom: 30px;
            left: 30px;
        }

        .-title {
            color: $white-color;
            font-weight: $fw-bold;
            font-size: 35px;
        }
    }

    .icon {
        width: 38px;
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

    .project-image {
        padding-bottom: 60%;
        background-color: $pink-color;
        background-size: cover;
        background-position: center;
    }

    .btn {
        background-color: $pink-color;
        font-weight: $fw-bold;
        border: 0;
    }
</style>