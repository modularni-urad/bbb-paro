import C from '../../src/budget/editor.js'

export default Object.assign(C, {
  template: `
<div>
  <table class="table" style="width:100%;">
    <thead>
      <tr>
        <th scope="col">Název</th>
        <th scope="col">Počet</th>
        <th scope="col">Cena</th>
        <th><button class="button is-primary" @click="add">+ přidat položku</button></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, idx) in value">
        <td>{{ i.name }} <a v-if="i.link" v-bind:href="i.link" target="_blank">(odkaz)</a></td>
        <td>{{ i.count }}</td>
        <td>{{ i.price }}</td>
        <td>
          <button class="button is-secondary" @click='edit(idx, i)'>edit</button>
          <button class="button is-danger" @click='remove(i)'>x odstranit</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="modal" :class="item!==null ? 'is-active' : ''">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <DynamicForm :cfg="formcfg" :data="item" :submit="onItemSubmit" />
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="item=null"></button>
  </div>

  <h3>Celkové náklady s DPH: {{ total }}.</h3>
  
</div>
`})