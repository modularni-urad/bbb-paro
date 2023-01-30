export default {
  data: function () {
    return {
      loaded: false,
      archive: [],
      curr: null,
      projekty: []
    }
  },
  props: ['data'],
  created: async function () {
    const callID = this.$router.currentRoute.params.call_id
    const filter = { id: callID }
    try {
      let currUrl = `${this.data.url}?filter=${JSON.stringify(filter)}`
      const data = await this.$root.request('get', currUrl)
      this.curr = data.length > 0 ? data[0] : null
      if (!this.curr) return Object.assign(this.$data, { projekty: [] })

      const ProjFilter = { 
        not: { state: 'draft' },
        call_id: callID,
      }
      const u = `${this.data.url}/${callID}?filter=${JSON.stringify(ProjFilter)}`
      this.projekty = await this.$root.request('get', u)
    } catch (err) {
      alert(err)
    } finally {
      this.loaded = true
    }
  }
}