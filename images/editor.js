const MAX_COUNT = 5

function loadAsBase64(theFile) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader()

    reader.onload = function(loadedEvent) {
        var arrayBuffer =  new Uint8Array(loadedEvent.target.result)
        const r = arrayBuffer.reduce((data, byte) => data + String.fromCharCode(byte), '') 
        resolve(btoa(r))
    }

    reader.readAsArrayBuffer(theFile)
  })
}

export default (templates) => ({
  data: function () {
    return {
      loading: _.map(_.range(MAX_COUNT), i => false)
    }
  },
  computed: {
    items: function () {
      const d = (this.data[this.cfg.name] || '').split(',')
      while (d.length < MAX_COUNT) {
        d.push(null)
      }
      return d
    },
    canUpload: function () {
      return !_.isUndefined(this.$parent.data.id)
    }
  },
  methods: {
    remove: function (idx) {
      const items = this.items
      items[idx] = ''
      this.data[this.cfg.name] = items.join(',')
    },
    onSelect: async function (idx, evt) {
      const content = await loadAsBase64(evt.target.files[0])
      this.loading[idx] = true
      const proj = this.$parent.data
      const filename = `paro/${proj.call_id}/${proj.id}/${idx}.jpg`
      const url = `${this.$store.state.site.api}/mediaman/upload/${filename}`
      await this.$root.request('post', url, { data: { content }})
      const items = this.items
      items[idx]=filename
      this.data[this.cfg.name] = items.join(',')
      this.loading[idx] = false
    }
  },
  props: [ 'data', 'cfg' ],
  template: templates['images_editor']
})