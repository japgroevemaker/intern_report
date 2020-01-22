<template>
    <div>
        <div class="nav-bar d-flex flex-row justify-content-between position-fixed col-10 pt-3 mt-3 mx-auto">
            <div class="navbar-brand py-0">
                <router-link :to="{name: 'home'}">
                    <img src="/static/general/logo.svg" height="25" alt="">
                    <!-- <h5 class="header-name d-inline ml-3 montserrat">joep gravemaker</h5> -->
                </router-link>
            </div>
            <ul class="navbar-nav pt-1">
                <li class="nav-item">
                    <i class="fa fa-bars float-right" @click="visible = !visible"></i>
                </li>
            </ul>
        </div>

        <transition name="nav-menu">
            <div class="container-fluid nav-container position-fixed" v-if="visible">
                <h3 class="position-absolute -close"  @click="visible = !visible">sluit</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-8 ml-3">
                            <ul class="nav flex-column" >
                                <li class="nav-item mt-3" @click="visible = !visible"> 
                                    <router-link :to="{name: 'home'}">home</router-link> 
                                </li>
                                <li class="nav-item mt-3" @click="visible = !visible"> 
                                    <router-link :to="{name: 'inleiding', query: {name: 'inleiding'}}">inleiding</router-link> 
                                </li>
                                <li class="nav-item mt-3" @click="visible = !visible"> 
                                    <router-link :to="{name: 'chapter', query: {name: 'Projecten'}}">projecten</router-link> 
                                </li>
                                <li class="nav-item mt-3" @click="visible = !visible"> 
                                    <router-link :to="{name: 'over-mij', query: {name: 'over mij'}}">over mij</router-link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="row contact-items mt-5">
                        <div class="col-8 ml-3">
                            <ul class="pl-0">
                                <li class="contact-item" v-for="(contactItemUp, index) in contactItemsUp" :key="index">{{contactItemUp}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row contact-items mt-2">
                        <div class="col-8 ml-3">
                            <ul class="pl-0">
                                <li class="contact-item" v-for="(contactItemDown, index) in contactItemsDown" :key="index">{{contactItemDown}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contactItemsUp: ['(06) 29 62 06 22', 'info@joepgravemaker'],
            contactItemsDown: ['lange nieuwstraat 116', 'ijmuiden'],
            visible: false
        }
    },
}
</script>

<style scoped lang="scss">
    .nav-item {
        cursor: pointer;
    }

    .menu-trans-enter {
        opacity: 0;
        transform: translateX(20px);
    }

    .menu-trans-enter-active {
        transition: all 10s ease-in;
    }

    .nav-menu-enter {
        transform: translateX(100%)
    }

    .nav-menu-enter-active {
        transition: all .2s ease-in-out;
    }

    .nav-menu-leave-active {
        transform: translateX(100%);
        transition: all .2s ease-in;
    }
    
    i {
        color: #fff;
        font-size: 30px !important;
    }

    .nav-bar {
        top: 0;
        left: 0;
        right: 0;
        z-index: 500;
    }

    .nav-container {
        z-index: 1000;
        padding-top: 20%;
        top: 0;
        bottom: 0;
        background-color: $pink-color;

        @include md {
            padding-top: 10%;
        }
        .-close {
            cursor: pointer;
            font-size: 15px;
            font-weight: $fw-bold;
            color: $grey-color;
            // text-decoration: underline;
            top: 20px;
            right: 50px;
        }

        .-line {
            border-top: solid 2px #fff;
        }


        a {
            font-weight: $fw-bold;
            font-size: 40px;
            color: #fff;
        }

        .contact-items {
            // margin-top: 30%;
            
            @include md {
                // margin-top: 10%;
            }

            .contact-item {
                list-style-type: none;
                font-size: 12px;
                color: $grey-color
            }

            .contact-item:nth-of-type(2) {
                font-weight: $fw-bold;
            }
        }

    }
</style>