import C from '../../src/pages/detail.js'
import ProjectStatus from '../parts/project_status.js'
import LikeButton from '../parts/likebutton.js'

export default Object.assign(C, {
  components: { ProjectStatus, LikeButton },
  template: `
<div v-if="loaded">
  <hgroup>
    <h1>{{ projekt.name }}</h1>
    <h2>{{ projekt.desc }}</h2>
  </hgroup>

  <div class="grid">
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 1em 0;">
      <img :src="$store.getters.mediaUrl(photo(0), 'w=800')" 
        style="grid-column-end: span 4;" />
      <img :src="$store.getters.mediaUrl(photo(1), 'w=800')" />
      <img :src="$store.getters.mediaUrl(photo(2), 'w=800')" />
      <img :src="$store.getters.mediaUrl(photo(3), 'w=800')" />
      <img :src="$store.getters.mediaUrl(photo(4), 'w=800')" />
    </div>

    <table>
      <thead><th>co</th><th>počet</th><th>cena</th></thead>
      <tbody>
        <tr v-for="i,idx in projekt.budget" :key="idx">
          <td>{{ i.name }}</td>
          <td>{{ i.count }}</td>
          <td>{{ i.price }}</td>
        </tr>
        <tr>
          <td colspan="2"><b>celkem</b></td>
          <td><b>{{ total }}</b></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <p>
    <markdown :text="projekt.content" />
  </p>

  <ProjectStatus :proj="projekt" />
  <LikeButton :call="curr" :proj="projekt" :API="data.url" />
</div>
`})