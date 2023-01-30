function stateText (state) {
  switch (state) {
    case 'draft': return 'nepublikovaný koncept'
    case 'new': return 'sbírá základní podporu'
    case 'supprtd': return 'získal dostatečnou základní podporu'
    case 'unsup': return 'nezískal dostatečnou základní podporu'
    case 'doable': return 'proveditelný, postupuje do akety'
    case 'unreal': return 'vyhodnocen jako neproveditelný'
    case 'willdo': return 'posunut do realizace'
    case 'wontdo': return 'nepodpořen k realizaci'
    default: return 'neznámý' 
  }
}

export default {
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
  props: ['proj']
}