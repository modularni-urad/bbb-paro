import ProjectStatusFN from '../parts/project_status.js'

export default (templates) => ({
  props: ['proj', 'call'],
  computed: {
    url: function () {
      return {
        name: 'paroproject_detail',
        params: {
          call_id: this.call.id,
          id: this.proj.id
        }
      }
    },
    photo: function () {
      return (this.proj.photo || '').split(',')[0]
    }
  },
  components: {
    ProjectStatus: ProjectStatusFN(templates)
  },
  template: templates['project_card']
})