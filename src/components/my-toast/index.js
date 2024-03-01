import MyToast from './toast';

export default {
  install(Vue) {
    const VueComp = Vue.extend(MyToast);
    let isToast = false;
    Vue.prototype.$toast = function (opts) {
      if (!isToast) {
        isToast = true;
        const vm = new VueComp().$mount(document.createElement('div'));
        document.body.appendChild(vm.$el);
        vm.message = opts.message;
        const duration = opts.duration || 2000;
        setTimeout(() => {
          isToast = false;
          document.body.removeChild(vm.$el);
          if (opts.onClose) {
            opts.onClose();
          }
        }, duration);
      }
    };
  },
};
