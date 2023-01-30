export default {
  data: function () {
    return {
      loaded: false,
      archive: [],
      curr: null,
      projekty: [],
      modalopened: false
    }
  },
  props: ['data'],
  created: async function () {
    try {
      const filter = { not: { status: 'closed' } }
      let currUrl = `${this.data.url}?filter=${JSON.stringify(filter)}`
      const data = await this.$root.request('get', currUrl)
      this.curr = data.length > 0 ? data[0] : null
      if (!this.curr) return Object.assign(this.$data, { projekty: [] })
      const ProjFilter = { 
        call_id: this.curr.id,
        not: { state: 'draft' }
      }
      const u = `${this.data.url}/${this.curr.id}?filter=${JSON.stringify(ProjFilter)}`
      this.projekty = await this.$root.request('get', u)
      this.archive = await this.$root.request('get',
        `${this.data.url}?filter=${JSON.stringify({ status: 'closed'})}`)
    } catch (err) {
      alert(err)
    } finally {
      this.loaded = true
    }
  }
}