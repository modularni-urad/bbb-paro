import C from '../../src/budget/editor.js'

export default Object.assign(C, {
  template: `
  <div>
  <table role="grid">
    <thead>
      <tr>
        <th scope="col">název</th>
        <th scope="col">počet</th>
        <th scope="col">cena za jednotku</th>
        <th><a @click.prevent="add" href="void 0" role="button">
          přidat položku <i class="far fa-plus-square"></i>
        </a></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, idx) in value">
        <td>{{ i.name }} <a v-if="i.link" v-bind:href="i.link" target="_blank">(odkaz)</a></td>
        <td>{{ i.count }}</td>
        <td>{{ i.price }}</td>
        <td>
          <a @click.prevent="edit(idx, i)" href="#" role="button" class="secondary">
            edit <i class="fas fa-edit"></i>
          </a>
          <a @click.prevent="remove(i)" href="void 0" role="button" class="contrast">
            odstranit <i class="fas fa-trash-alt"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  <dialog :open="item!==null">
    <article>
      <header>
        <a href="#" aria-label="close" class="close" @click.prevent="close()"></a>
        upravit položku rozpočtu
      </header>
      <DynamicForm :cfg="formcfg" :data="item" :submit="onItemSubmit" />
    </article>
  </dialog>
  <h3>Celkové náklady s DPH: {{ total }}.</h3>
  
</div>
`})