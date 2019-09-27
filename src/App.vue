<template>
    <div id="app" style="height: 100%">
        <transition name="router-fades" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import 'moment/locale/zh-cn';
    export default {
        name: 'app',
        data() {
            return {
            }
        },
        watch: {},
        methods: {},
    }
</script>
