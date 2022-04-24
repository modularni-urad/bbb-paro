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
        const res = await this.$root.request('get', `${this.API}${this.call.id}/${this.proj.id}/support`)
        this.$data.support = res && res.length > 0
      }
    },
    sendSupport: async function () {
      if (this.support) {
        await this.$root.request('delete', `${this.API}${this.call.id}/${this.proj.id}/support`)
        this.support = false
      } else {
        const res = await this.$root.request('post', `${this.API}${this.call.id}/${this.proj.id}/support`)
        this.support = true
        this.$props.proj.state = res
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
