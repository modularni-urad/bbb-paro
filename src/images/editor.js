import uploadFile from './uploader.js'
const MAX_COUNT = 5

export default {
  data: function () {
    return {
      loading: _.map(_.range(MAX_COUNT), i => false)
    }
  },
  computed: {
    items: function () {
      const d = (this.value || '').split(',')
      while (d.length < MAX_COUNT) {
        d.push(null)
      }
      return d
    },
    canUpload: function () {
      return this.$parent.data && !_.isUndefined(this.$parent.data.id)
    }
  },
  methods: {
    remove: function (idx) {
      const items = this.items
      items[idx] = ''
      this.$emit('input', this.cfg.name, items.join(','))
    },
    onSelect: async function (idx, evt) {
      this.loading[idx] = true
      try {
        const filename = await uploadFile(evt.target.files[0], idx, this.cfg, this)
        const items = this.items
        items[idx]=filename
        this.$emit('input', this.cfg.name, items.join(','))
      } catch (err) {
        alert(err)
      } finally {
        this.loading[idx] = false
      }    
    }
  },
  props: ['cfg', 'value']
}