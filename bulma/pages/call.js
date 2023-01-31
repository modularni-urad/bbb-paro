import C from '../../src/pages/call.js'
import ProjectCard from '../parts/project_card.js'

export default Object.assign(C, {
  components: { ProjectCard },
  template: `
<div v-if="loaded">
  <h2>{{ curr.name }}</h2>
  <kbd v-if="projekty.length === 0">žádné návrhy do výzvy nedorazily :(</kbd>
  <div v-else style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
    <ProjectCard v-for="i,idx in projekty" :key="idx" 
        :proj="i" :call="curr" />
  </div>
</div>  
`
})