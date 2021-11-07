import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios  from 'axios'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import {
  Button, Select, Radio, Container, Aside, Header, Main, Menu, Submenu, MenuItemGroup,
  MenuItem, Dropdown, DropdownMenu, DropdownItem, Col, Row, Card, Table, TableColumn,
  Input, Tag, Scrollbar, Upload, Dialog, CheckboxGroup, Checkbox,
} from 'element-ui'
Vue.config.productionTip = false
// Vue.component(Button.name, Button)
Vue.use(Button)
Vue.component(Select.name, Select)
Vue.component(Radio.name, Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Tag)
Vue.use(Scrollbar)
Vue.use(Upload)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(CheckboxGroup)
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
// Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
