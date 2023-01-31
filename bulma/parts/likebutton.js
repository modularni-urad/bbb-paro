import C from '../../src/parts/likebutton.js'

export default Object.assign(C, {
  template: `
<div v-if="canSupport">
  <button class="button" :disabled="!$store.state.user" @click="sendSupport">
    {{supportbutt}}
  </button>
  <span v-if="!$store.state.user">
    Pro udílení "Líbí se mi" se přihlašte
  </span>
</div>
`})