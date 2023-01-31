import C from '../../src/pages/index.js'
import ProjectCard from '../parts/project_card.js'

export default Object.assign(C, {
  components: { ProjectCard },
  template: `
  <div v-if="loaded">
  <div v-if="curr">
    <h2 class="title">{{ curr.name }}</h2>
    <p>
      Začátek podávání návrhů: {{ curr.submission_start | date }}<br/>
      Konec navrhování: {{ curr.submission_end | date }}<br/>
      Začátek ověřování návrhů: {{ curr.thinking_start | date }}<br/>
      Začátek hlasování v anketě: {{ curr.voting_start | date }}<br/>
      Konec hlasování: {{ curr.voting_end | date }}<br/>
      Limit rozpočtu návrhu: {{ curr.budgetlimit }} Kč<br/>
      Počet palečků základní podpory: {{ curr.minimum_support }}
    </p>
    <router-link class="button is-primary" :to="{name:'paroform'}">
      podat/upravit projekt
    </router-link>
    <hr />
    <div class="columns is-flex-wrap-wrap">
      <ProjectCard v-for="i,idx in projekty" :key="idx" :proj="i" :call="curr" />
    </div>
  </div>
  <span v-else>Není žádná aktuální výzva</span>
  <div>
    <h4>archiv</h4>
    <ul class="menu-list" v-if="loaded">
      <li v-for="i,idx in archive" :key="idx">
        <router-link :to="{name:'parocall', params: { call_id: i.id }}">
          <h5>{{ i.name }}</h5>
        </router-link>
      </li>
    </ul>
  </div>
</div>
`
})
