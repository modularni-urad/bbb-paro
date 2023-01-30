import formcontrol from '../parts/formcontrol.js'

export default {
  data: function () {
    return {
      loaded: false,
      curr: null,
      projekt: null
    }
  },
  created: async function () {
    try {
      let filter = { not: { status: 'closed' } }
      let currUrl = `${this.data.url}?filter=${JSON.stringify(filter)}`
      const data = await this.$root.request('get', currUrl)
      this.curr = data.length > 0 ? data[0] : null
      this.projekt = await this.getMyProject() || { budget: [], photo: ',,,' }
    } catch (err) {
    } finally {
      this.loaded = true
    }
  },
  props: ['data'],
  computed: {
    formcfg: function () {
      return jsyaml.load(formcontrol)
    },
    fc: function () {
      return { 
        budgeteditor: budgeteditorFN(templates),
        position_input: positionInputFN(templates),
        images_editor: imagesEditorFN(templates)
      }
    },
    canEdit: function () {
      return this.curr.status !== 'open' 
        && this.$router.currentRoute.query.d === undefined
    }
  },
  methods: {
    submit: function (data) {
      data = Object.assign({}, data, { budget: JSON.stringify(data.budget) })
      let p = null
      if (this.projekt.id) {
        const u = `${this.data.url}${this.curr.id}/${this.projekt.id}`
        p = this.$root.request('put', u, { data, withCredentials: true })
      } else {
        const u = `${this.data.url}${this.curr.id}`
        p = this.$root.request('post', u, { data, withCredentials: true })
      }
      return p.then(res => {
        alert('uloženo')
        return res[0]
      })
    },
    publish: function () {
      const u = `${this.data.url}${this.curr.id}/${this.projekt.id}/publish`
      return this.$root.request('put', u, { withCredentials: true })
        .then(res => this.projekt.state = 'new')
    },
    getMyProject: function () {
      if (!this.$store.state.user) return null
      const filter = { author: this.$store.state.user.id }
      const u = `${this.data.url}${this.curr.id}?filter=${JSON.stringify(filter)}`
      return this.$root.request('get', u).then(res => {
        return res.length > 0 ? res[0] : null
      }).catch(err => null)
    }
  }
}