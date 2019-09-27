<!--suppress ALL-->
<template>
    <div class="index">
        <router-view></router-view>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import config from "../config/config";


    export default {
        name: 'index',
        components: {},
        data() {
            return {}

        }
    }
</script>
<style lang="less">

</style>
