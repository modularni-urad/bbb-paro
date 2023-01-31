import C from '../../src/parts/project_card.js'

export default Object.assign(C, {
  template: `
<div class="column is-one-third content">
  <img :src="$store.getters.mediaUrl(photo, 'w=300')" style="width:100%" /><br/>
  <h4><router-link :to="url">{{ proj.name }}</router-link></h4>
  <h5>{{ proj.desc }}</h5>
  <ProjectStatus :proj="proj" />
</div>`
})