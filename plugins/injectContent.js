import Vue from "vue";

import content from "../assets/content.json";

const InjectContent = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          content
        };
      }
    });
  }
};

Vue.use(InjectContent);