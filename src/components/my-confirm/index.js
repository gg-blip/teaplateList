import MyConfirm from './confirm';

export default {
  install(Vue) {
    const VueComp = Vue.extend(MyConfirm);
    Vue.prototype.$confirm = function (msg, arr) {
      const vm = new VueComp().$mount(document.createElement('div'));
      document.body.appendChild(vm.$el);
      vm.msg = msg;
      if (arr && arr.length > 0) {
        vm.btns = arr;
      }
    };
  },
};
