/* eslint-disable no-console,no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Antd from "ant-design-vue";
import App from './App'
import store from './store/index'
import router from './router/index'
import 'ant-design-vue/dist/antd.css'
import 'vuescroll/dist/vuescroll.css';
import '@/assets/css/theme.less'
import '@/assets/icon/iconfont'

import moment from 'moment';
import 'moment/locale/zh-cn';

import common from "./mixins/common";

import '@/utils/filter' // global filter


moment.locale('zh-cn');

Vue.use(VueRouter);
Vue.use(store);

Vue.config.productionTip = false;
Vue.use(Antd);

Vue.mixin(common);


new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});
