
export default (templates) => ({
  computed: {
    content: function () {
      switch (this.$props.proj.state) {
        case 'supprtd': return 'Projekt získal dostatečnou základní podporu'
        default: return 'Projekt sbírá základní podporu'
      }
    }
  },
  methods: {
    getClass(mapping) {
      return this.proj.state in mapping 
        ? mapping[this.proj.state] 
        : mapping['default'] || ''
    }
  },
  props: ['proj'],
  template: templates['project_status']
})