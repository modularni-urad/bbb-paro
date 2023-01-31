export default {
  data: () => {
    return {
      shown: false,
      position: null
    }
  },
  props: ['cfg', 'value'],
  created () {
    function _extractVal () {
      const p = this.value || this.$store.state.site.defaultMapCenter
      const r = /\d+.\d*,\s*\d+.\d*/g
      return p && p.match(r) ? p.split(',') : [49.41812070066643, 14.666748046875002]
    }
    this.$data.position = _extractVal.bind(this)()
  },
  methods: {
    onSubmited () {
      this.shown = false
      this.$emit('input', this.cfg.name, this.position.join(','))
      // TODO: unload scripts
    },
    show () {
      this.shown = true
      this.onShown()
    },
    async onShown() {
      try {
        const self = this
        const u = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet-src.js'
        await this.$store.dispatch('loadScript', u)
        await this.$store.dispatch('loadStyle', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css')

        var map = L.map('mapContainer').setView(this.$data.position, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        var marker = L.marker(this.$data.position, {
          draggable: true
        }).addTo(map)
        marker.on('dragend', (evt) => {
          const val = evt.target.getLatLng()
          self.$data.position[0] = val.lat
          self.$data.position[1] = val.lng
        })
      } catch (er) {
        console.error(er)
      }
    }
  }
}
