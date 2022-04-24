import formcontrol from '../parts/formcontrol.js'
import budgeteditorFN from '../budget/editor.js'
import positionInputFN from '../parts/position_input.js'
import imagesEditorFN from '../images/editor.js'

export default (templates) => ({
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
      let currUrl = `${this.$props.data.url}?filter=${JSON.stringify(filter)}`
      const dataReq = await axios.get(currUrl)
      this.$data.curr = dataReq.data.length > 0 ? dataReq.data[0] : null
      this.$data.projekt = await this.getMyProject() || { budget: [], photo: ',,,' }
    } catch (err) {
    } finally {
      this.$data.loaded = true
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
        const u = `${this.$props.data.url}${this.$data.curr.id}/${this.projekt.id}`
        p = this.$root.request('put', u, { data })
      } else {
        const u = `${this.$props.data.url}${this.$data.curr.id}`
        p = this.$root.request('post', u, { data })
      }
      return p.then(res => {
        alert('uloženo')
        return res[0]
      })
    },
    publish: function () {
      const u = `${this.$props.data.url}${this.$data.curr.id}/${this.projekt.id}/publish`
      return this.$root.request('put', u).then(res => this.projekt.state = 'new')
    },
    getMyProject: function () {
      if (!this.$store.state.user) return null
      const filter = { author: this.$store.state.user.id }
      const u = `${this.$props.data.url}${this.$data.curr.id}?filter=${JSON.stringify(filter)}`
      return axios.get(u).then(res => {
        return res.data.length > 0 ? res.data[0] : null
      }).catch(err => null)
    }
  },
  template: templates['form']
})