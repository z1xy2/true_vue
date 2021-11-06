export default {
  state: {
    isCollapse: false,
    locate: '首页'
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
  }
}
