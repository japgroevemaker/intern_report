<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-10 text-center mx-auto not-found">
                    <div class="gif" :style="'background-image: url('+ gif +')'"></div>
                    <p class="plain-text text-center mb-5 mb-lg-2">
                        De pagina waar je naar zoekt bestaat niet. Doei.
                    </p>

                    <router-link :to="{name: 'home'}"> <span class="back-home montserrat"> terug naar home <i class="fa fa-arrow-right ml-5"></i> </span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gif: 'https://media.giphy.com/media/dv6G2Yk3evCSEUsQoi/giphy.gif',
        }
    },
    created() {
        this.getFooter()
    },

    methods: {
        getFooter(){
            let footer = document.querySelector('footer');
            footer.classList.add('positioning');
            console.log(footer)
        }
    }
}
</script>

<style lang="scss">
    .positioning {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .gif {
        background-size: cover;
        background-position: center;
        padding-bottom: 100%;

        @include md {
            // background-size: 100%;
            background-position: top;
            padding-bottom: 70%;
        }
    }

    .back-home {
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
</style>