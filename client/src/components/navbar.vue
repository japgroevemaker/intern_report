<template>
    <div>
        <div class="nav-bar col-10 pt-3 mt-3 mx-auto">
            <ul class="navbar-nav">
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
                                <transition-group name="menu-trans">
                                    <li class="nav-item mt-5" @click="visible = !visible" v-for="(navItem, index) in navItems" :key="index"> 
                                        <router-link :to="{name: navItem, params: {title: navItem}}">{{navItem}}</router-link> 
                                    </li>
                                </transition-group>
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
        </transition>
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
}
</script>

<style scoped lang="scss">

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

    .nav-container {
        z-index: 1000;
        .-close {
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

        padding-top: 30%;
        top: 0;
        bottom: 0;
        background-color: $pink-color;

        a {
            font-weight: $fw-bold;
            font-size: 40px;
            color: #fff;
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