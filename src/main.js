import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.config.productionTip = true;

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutside = function(event) {
      event.stopPropagation();

      let currentSelect = 
        el.parentElement
        .getElementsByClassName("select-options")[0];

      if (el !== event.target || !el.contains(event.target)) {
        if (binding.arg) {
          if (currentSelect) {
            if (!currentSelect.contains(event.target)) {
              vnode.context[binding.expression](event);
            }
          }
        } else {
          vnode.context[binding.expression](event);
        }
      }
    };

    document.body.addEventListener("click", el.clickOutside);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutside);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
