import Vue from 'vue'

Vue.mixin({
  methods: {
    extend(target) {
      for(var i=1; i<arguments.length; ++i) {
        var from = arguments[i];
        if(typeof from !== 'object') continue;
        for(var j in from) {
          if(from.hasOwnProperty(j)) {
            target[j] = typeof from[j]==='object' && !Array.isArray(from[j])
              ? this.extend({}, target[j], from[j])
              : from[j];
          }
        }
      }
      return target;
    },
    isEmptyObject(obj) {
      for(let key in obj) {
        if(obj.hasOwnProperty(key))
          return false;
      }
      return true;
    }
  }
})
