import C from '../../src/parts/likebutton.js'

export default Object.assign(C, {
  template: `
<div v-if="canSupport">
  <button :disabled="!$store.state.user" @click="sendSupport">
    {{supportbutt}}
  </button>
  <kbd v-if="!$store.state.user">
    Pro udílení "líbí se mi" se přihlašte
  </kbd>
</div>
`})