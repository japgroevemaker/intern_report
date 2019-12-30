<template>
    <div>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#"><i class="fa fa-bars"></i></a>
            </li>
        </ul>
        <div class="container-fluid nav position-absolute">
            <div class="row ml-2">
                <div class="col-11">
                    <ul class="nav flex-column">
                        <li class="nav-item" v-for="(navItem, index) in navItems" :key="index"> <a :href="`/pages/${navItem}`">{{navItem}}</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navItems: ['home', 'inleiding', 'over mij']
        }
    }
}
</script>

<style lang="scss">
    
    a {
        color: #fff;
        font-size: 30px;
    }

    .nav {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $pink-color;

        a {
            font-weight: $fw-bold;
            font-size: 40px;
        }
    }
</style>