<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-10 mx-auto not-found">
                    <div class="gif" :style="'background-image: url('+ gif +')'"></div>
                    <p class="plain-text text-center">
                        De pagina waar je naar zoekt bestaat niet. Doei.
                    </p>
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
    }
</style>