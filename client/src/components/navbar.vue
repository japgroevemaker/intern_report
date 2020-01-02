<template>
    <div>
        <!-- <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#"><i class="fa fa-bars"></i></a>
            </li>
        </ul> -->
        <transition>
        
        </transition>
        <div class="nav-bar col-10 pt-3 mx-auto">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <i class="fa fa-bars float-right" @click="visible = !visible"></i>
                </li>
            </ul>
        </div>
        <div class="container-fluid nav-container position-fixed" v-if="visible">
            <div class="container">
                <div class="row">
                    <div class="col-8 ml-3">
                        <ul class="nav flex-column">
                            <li class="nav-item mt-5" v-for="(navItem, index) in navItems" :key="index"> <a :href="`/pages/${navItem}`">{{navItem}}</a> </li>
                        </ul>
                    </div>
                </div>
                
                <div class="row contact-items">
                    <div class="col-8 ml-3">
                        <ul class="pl-0">
                            <li class="contact-item" v-for="(contactItemUp, index) in contactItemsUp" :key="index">{{contactItemUp}}</li>
                            <div class="clearfix mt-2"></div>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navItems: ['home', 'inleiding', 'over mij'],
            contactItemsUp: ['(06) 29 62 06 22', 'info@joepgravemaker'],
            contactItemsDown: ['lange nieuwstraat 116', 'ijmuiden'],
            visible: false
        }
    },
    methods: {
        unfoldNav(){

        }
    },
}
</script>

<style lang="scss">
    
    i {
        color: #fff;
        font-size: 30px !important;
    }

    .nav-container {
        padding-top: 30%;
        top: 0;
        // left: 0;
        right: -100%;
        bottom: 0;
        background-color: $pink-color;

        a {
            font-weight: $fw-bold;
            font-size: 40px;
        }

        .contact-items {
            margin-top: 30%;

            .contact-item {
                list-style-type: none;
                font-size: 10px;
                color: $grey-color
            }

            .contact-item:nth-of-type(2) {
                font-weight: $fw-bold;
            }
        }

    }
</style>