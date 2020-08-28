import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutside = function (event) {
      if (el !== event.target || !el.contains(event.target)) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutside)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutside)
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
