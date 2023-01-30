import C from '../../src/parts/project_status.js'

export default Object.assign(C, {
  template: `
<p>
  <kbd 
    :class="getClass({'supprtd':'is-success','default':'is-info'})"
  >
    {{ content }}
  </kbd>
</p>
`
})
