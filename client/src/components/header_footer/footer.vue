<template>
    <div>
        <footer>
            <div class="container py-3">
            
                    <div class="row contact-items my-md-3">
                        <div class="col-5 ml-3 d-md-flex my-md-auto mx-auto">
                            <ul class="pl-0 mr-md-5 mb-md-0">
                                <li class="contact-item montserrat" v-for="(contactItemUp, index) in contactItemsUp" :key="index">{{contactItemUp}}</li>
                            </ul>

                            <ul class="pl-0 mb-md-0">
                                <li class="contact-item montserrat" v-for="(contactItemDown, index) in contactItemsDown" :key="index">{{contactItemDown}}</li>
                            </ul>
                        </div>

                        <div class="col-5 d-flex justify-content-around my-auto">
                            
                                <a v-for="(link, index) in links" :key="index" :href="link.link" target="blank">
                                    <div class="circle">
                                        <img :src="'/static/footer/'+ link.image" alt="">
                                    </div>
                                </a>
                            
                        </div>
                    </div>

                
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contactItemsUp: ['(06) 29 62 06 22', 'info@joepgravemaker'],
            contactItemsDown: ['lange nieuwstraat 116', 'ijmuiden'],
            links: [
                { link: 'https://www.instagram.com/jap.groevemaker/', image: 'instagram.svg' },
                { link: 'https://github.com/japgroevemaker', image: 'github.svg' },
                { link: 'https://www.linkedin.com/in/joep-gravemaker/', image: 'linkedin.svg' }
            ],
        }
    },
}
</script>

<style lang="scss">
    footer {
        background-color: $grey-color;

        .contact-items {

            .contact-item {
                list-style-type: none;
                font-size: 10px;
                color: $white-color
            }

            .contact-item:nth-of-type(2) {
                font-weight: $fw-bold;
            }

            .circle {
                width: 30px;
                height: 30px;
                background-color: $white-color;
                border-radius: 50%;

                img {
                    background: $grey-color
                }
            }
        }
    }
</style>