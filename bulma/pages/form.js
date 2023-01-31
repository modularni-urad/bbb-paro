import C from '../../src/pages/form.js'
import BudgetEditor from '../parts/budget_editor.js'
import PositionInput from '../parts/position_input.js'
import ImagesEditor from '../parts/images_editor.js'

const c = Object.assign(C, {
  template: `
<div v-if="loaded">
  <kbd v-if="canEdit">
    podávat návrhy lze až od {{ curr.submission_start | date }}
  </kbd>
  <div v-else-if="this.$store.getters.userLogged">
    <DynamicForm :cfg="formcfg" :data="projekt" :submit="submit"
      :extracomponents="extracomponents" />
    <router-link class="button" 
      :to="{name: 'paroindex'}">storno</router-link>
  </div>
  <kbd v-else>
    pracovat s projektovým návrhem může pouze přihlášený uživatel
  </kbd>
</div>
  `
})
c.computed.extracomponents = function () {
  return { BudgetEditor, PositionInput, ImagesEditor }
}
export default c