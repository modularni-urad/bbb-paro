import C from '../../src/parts/project_card.js'

export default Object.assign(C, {
  template: `
<div class="column">
  <img :src="$store.getters.mediaUrl(photo, 'w=400')" /><br/>
  <hgroup>
    <h4><router-link :to="url">{{ proj.name }}</router-link></h4>
    <h5>{{ proj.desc }}</h5>
  </hgroup>
</div>`
})