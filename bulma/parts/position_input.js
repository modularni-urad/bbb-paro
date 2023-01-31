import C from '../../src/parts/position_input.js'

export default Object.assign(C, {
  template: `
<div>
  <input class="input" :value="value" readonly />
  <button class="button" @click="show">upravit</button>

  <div class="modal" :class="{'is-active': shown}">
    <div class="modal-background"></div>
    <div class="modal-content">
      posunem markeru vyberte polohu
      <div id="mapContainer" style="width: 100%; height: 400px;"></div>
      <button @click.prevent="onSubmited" class="button is-primary">OK</button>
      <button @click.prevent="shown=false" class="button">Cancel</button>
    </div>
    <button class="modal-close is-large" aria-label="close" 
      @click.prevent="onSubmited"></button>
  </div>

</div>
`})