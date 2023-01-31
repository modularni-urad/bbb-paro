import C from '../../src/pages/detail.js'
import ProjectStatus from '../parts/project_status.js'
import LikeButton from '../parts/likebutton.js'

export default Object.assign(C, {
  components: { ProjectStatus, LikeButton },
  template: `
<div v-if="loaded" class="content">
  <h1 class="title">{{ projekt.name }}</h1>
  <h2 class="subtitle">{{ projekt.desc }}</h2>
  
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
    <img :src="$store.getters.mediaUrl(photo(0), 'w=800')" 
      style="grid-column-end: span 2; grid-row-end: span 2;" />
    <img :src="$store.getters.mediaUrl(photo(1), 'w=800')" />
    <img :src="$store.getters.mediaUrl(photo(2), 'w=800')" />
    <img :src="$store.getters.mediaUrl(photo(3), 'w=800')" />
    <img :src="$store.getters.mediaUrl(photo(4), 'w=800')" />
  </div>
  
  <markdown :text="projekt.content" />

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

  <ProjectStatus :proj="projekt" />
  <LikeButton :call="curr" :proj="projekt" :API="this.$props.data.url" />

</div>
`})