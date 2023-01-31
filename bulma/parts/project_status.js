import C from '../../src/parts/project_status.js'

export default Object.assign(C, {
  template: `
<div class="notification" 
  :class="getClass({'supprtd':'is-success','default':'is-info'})">
  {{ content }}
</div>
`
})
