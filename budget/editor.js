import formcontrol from './formcontrol.js'

export function countTotal (items) {
  return items.reduce((acc, i) => {
    return acc + (i.count * i.price)
  }, 0)
}

export default (templates) => ({
  data: function () {
    return {
      item: null,
      currIdx: null
    }
  },
  methods: {
    remove: function (item) {
      const items = _.clone(this.value)
      const idx = _.findIndex(items, i => (i.name === item.name))
      items.splice(idx, 1)
      this.$emit('input', this.cfg.name, items)
    },
    add: function () {
      this.$data.currIdx = null
      this.$data.item = { count: 1, name: '', price: '', link: '' }
    },
    edit: function (idx, item) {
      this.$data.currIdx = idx
      this.$data.item = item
      // Object.assign(this.$data.item, item)
    },
    onItemSubmit: function (item) {
      const items = this.value || []
      this.$data.currIdx === null
        ? items.push(item)
        : Object.assign(items[this.$data.currIdx], item)
      this.$data.item = null
      this.$emit('input', this.cfg.name, items)
    }
  },
  computed: {
    total: function () {
      return countTotal(this.value || [])
    },
    formcfg: function () {
      return jsyaml.load(formcontrol)
    }
  },
  props: ['cfg', 'value'],
  template: templates['budgeteditor']
})