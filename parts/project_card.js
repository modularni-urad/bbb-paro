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
    }
  },
  template: templates['project_card']
})