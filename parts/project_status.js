function stateText (state) {
  switch (state) {
    case 'draft': return 'nepublikovaný koncept'
    case 'new': return 'sbírá základní podporu'
    case 'supprtd': return 'získal dostatečnou základní podporu'
    default: 'neznámý' 
  }
}

export default (templates) => ({
  computed: {
    content: function () {
      return `stav: ${stateText(this.$props.proj.state)}`
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