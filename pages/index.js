import ProjectCardFN from '../parts/project_card.js'

export default (templates) => ({
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
      let currUrl = `${this.$props.data.url}?filter=${JSON.stringify(filter)}`
      const data = await this.$root.request('get', currUrl)
      this.$data.curr = data.length > 0 ? data[0] : null
      if (!this.$data.curr) return Object.assign(this.$data, { projekty: [] })
      const ProjFilter = { 
        call_id: this.$data.curr.id,
        not: { state: 'draft' }
      }
      const u = `${this.$props.data.url}/${this.$data.curr.id}?filter=${JSON.stringify(ProjFilter)}`
      const projekty = await this.$root.request('get', u)
      this.$data.projekty = projekty
    } catch (err) {
      alert(err)
    } finally {
      this.$data.loaded = true
    }
  },
  components: { 
    ProjectCard: ProjectCardFN(templates)
  },
  template: templates['index']
})

// `<h4>archiv</h4>
// <ul class="menu-list" v-if="loaded">
//   <li v-for="i,idx in items" :key="idx">
//     <router-link :to="data.detail_link + '/' + i.id">
//       <h3 class="title is-4">{{ i.name }}</h3>
//     </router-link>
//   </li>
// </ul>`
