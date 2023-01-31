import C from '../../src/parts/position_input.js'

export default Object.assign(C, {
  template: `
<div style="display: flex;">
  <input :value="value" readonly />
  <a @click.prevent="show" href="void 0" role="button">upravit</a>

  <dialog :open="shown">
    <article>
      <header style="margin-bottom: 0;">
        <a @click.prevent="shown=false" aria-label="Close" class="close"></a>
        posunem markeru vyberte polohu
      </header>
      
      <div id="mapContainer" style="width: 100%; height: 400px;"></div>
      <footer style="margin-top: 0;">
        <a @click.prevent="shown=false" href="void 0" role="button" class="secondary">Cancel</a>
        <a @click.prevent="onSubmited" href="void 0" role="button">OK</a>
      </footer>
    </article>
  </dialog>

</div>
`})