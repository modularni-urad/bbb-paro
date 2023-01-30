import C from '../../src/pages/form.js'
import Budgeteditor from '../parts/budget_editor.js'
import PositionInput from '../parts/position_input.js'
import ImagesEditor from '../parts/images_editor.js'

export default Object.assign(C, {
  components: { Budgeteditor, PositionInput, ImagesEditor },
  template: `
<div v-if="loaded">
  <kbd v-if="canEdit">
    podávat návrhy lze až od {{ curr.submission_start | date }}
  </kbd>
  <div v-else-if="this.$store.getters.userLogged">
    <DynamicForm :cfg="formcfg" :data="projekt" :submit="submit" :extracomponents="fc">

      <template v-slot:submitbuttons="{ hasErrors, submitting, saveDisabled, handleSubmit }">
        <div class="grid">
          <button class="button is-success" :disabled="saveDisabled" @click="handleSubmit">
            <span class="icon is-small"><i class="fas fa-save"></i></span>
            <span>uložit</span>
            <i v-if="submitting" class="fas fa-spinner spinning"></i>
          </button>
          <button v-if="projekt.state === 'draft'" class="button is-secondary" @click="publish">
            zveřejnit <i class="fas fa-upload"></i>
          </button>
          <router-link role="button" class="secondary" :to="{name: 'paroindex'}">storno</router-link>
        </div>
      </template>
    
    </DynamicForm>    
  </div>
  <kbd v-else>
    pracovat s projektovým návrhem může pouze přihlášený uživatel
  </kbd>
</div>
  `
})