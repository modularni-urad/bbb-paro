import LikeButtonFN from '../parts/likebutton.js'
import ProjectStatusFN from '../parts/project_status.js'

const DEFAULT = 'https://www.freeiconspng.com/uploads/no-image-icon-13.png'

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
      const callid = this.$router.currentRoute.params.call_id
      let currUrl = `${this.$props.data.url}?filter={"id":"${callid}"}`
      const calls = await this.$root.request('get', currUrl)
      this.$data.curr = calls.length > 0 ? calls[0] : null

      const filter = { id: this.$router.currentRoute.params.id }
      const u = `${this.$props.data.url}${callid}?filter=${JSON.stringify(filter)}`
      const projekty = await this.$root.request('get', u)
      this.$data.projekt = projekty.length > 0 ? projekty[0] : null
    } catch (err) {
    } finally {
      this.$data.loaded = true
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
  },
  props: ['data'],
  components: { 
    LikeButton: LikeButtonFN(templates),
    ProjectStatus: ProjectStatusFN(templates)
  },
  template: templates['detail']
})