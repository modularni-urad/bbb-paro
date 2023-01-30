const DEFAULT = 'https://www.freeiconspng.com/uploads/no-image-icon-13.png'

export default {
  data: function () {
    return {
      loaded: false,
      curr: null,
      projekt: null
    }
  },
  props: ['data'],
  created: async function () {
    try {
      const callid = this.$router.currentRoute.params.call_id
      let currUrl = `${this.data.url}?filter={"id":"${callid}"}`
      const calls = await this.$root.request('get', currUrl)
      this.curr = calls.length > 0 ? calls[0] : null

      const filter = { id: this.$router.currentRoute.params.id }
      const u = `${this.data.url}${callid}?filter=${JSON.stringify(filter)}`
      const projekty = await this.$root.request('get', u)
      this.projekt = projekty.length > 0 ? projekty[0] : null
    } catch (err) {
    } finally {
      this.loaded = true
    }
  },
  computed: {
    total: function () {
      return this.projekt.budget.reduce((acc, i) => {
        return acc + (i.count * i.price)
      }, 0)
    }
  },
  methods: {
    photo: function (idx) {
      const arr = (this.projekt.photo || '').split(',')
      return arr.length >= idx && arr[idx] ? arr[idx] : DEFAULT
    }
  }
}