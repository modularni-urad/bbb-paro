import C from '../../src/images/editor.js'

export default Object.assign(C, {
  template: `
<div v-if="$parent.data" class="columns">
  <div class="culumn" v-for="i,idx in items" :key="idx">

    <span v-if="loading[idx] === true">loading</span>
    <div v-else-if="i">
      <img :src="$store.getters.mediaUrl(i, 'w=300')" />
      <button class="button is-danger" @click="remove(idx)">odstranit</button>
    </div>
    <input v-else class="input" type="file" accept=".jpg,.jpeg"
      @change="onSelect(idx, $event)" />

  </div>  
</div>
<div v-else class="notification">obrázky jde nahrát až po uložení</div>
`})