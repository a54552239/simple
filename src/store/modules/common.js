const common = {
    state: {
        viewRefresh: false, //通知刷新视图
    },
    mutations: {
        viewRefresh(state) {
            state.viewRefresh = !state.viewRefresh;
        },
    },
    actions: {
        viewRefresh({commit}) {
            commit('viewRefresh');
        },
    }
};
export default common
