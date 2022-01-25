export default (templates) => ({
  data: () => {
    return {
      support: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      if (this.$store.state.user) {
        const res = await axios.get(`${this.API}${this.call.id}/${this.proj.id}/support`)
        this.$data.support = res && res.data.length > 0
      }
    },
    sendSupport: async function () {
      if (this.$data.support) {
        await axios.delete(`${this.API}${this.call.id}/${this.proj.id}/support`)
        this.$data.support = false
      } else {
        const res = await axios.post(`${this.API}${this.call.id}/${this.proj.id}/support`)
        this.$data.support = true
        this.$props.project.state = res.data
      }
    }
  },
  computed: {
    canSupport: function () {
      return this.call.status === 'open' && this.proj.state === 'new'
    },
    supportbutt: function () {
      return this.$data.support ? 'už se mi to nelíbí' : 'líbí se mi'
    }
  },
  props: ['call', 'proj', 'API'],
  template: templates['likebutton']
})
