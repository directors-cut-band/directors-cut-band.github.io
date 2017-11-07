Vue.component('block', {
  template: '#block-template',
  props: {
    divId: {
      type: String
    },
    isDark: {
      type: Boolean,
      default: false
    }
  }
})