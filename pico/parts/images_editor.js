import C from '../../src/images/editor.js'

export default Object.assign(C, {
  template: `
<div v-if="$parent.data.id" 
  style="display: grid; gap: 10px; grid-template-columns: repeat(5, 1fr);">

  <div v-for="i,idx in items" :key="idx">

    <span v-if="loading[idx] === true">loading</span>
    <div v-else-if="i">
      <img :src="$store.getters.mediaUrl(i, 'w=300')" />
      <button @click="remove(idx)">odstranit</button>
    </div>
    <input v-else :disabled="!canUpload" type="file" 
      accept=".jpg,.jpeg" @change="onSelect(idx, $event)" />

  </div>

</div>
<kbd v-else>obrázky jde nahrát až po uložení</kbd>
`})