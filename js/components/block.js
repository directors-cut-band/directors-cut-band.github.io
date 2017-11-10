Vue.component('block', {
  template: '#block-template',
  props: {
    divId: {
      type: String
    },
    variant: {
      type: String
    }
  },
  computed: {
    contentClass: function() {
      if (this.variant == 'dark') {
        return 'content--dark'
      } else if (this.variant == 'transparent') {
        return 'content--transparent'
      } else {
        return ''
      }
    }
  }
})