import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

var cors = require("cors");
createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .use(cors)
  .mount("#app");
