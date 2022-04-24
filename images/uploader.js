const tus = import('https://cdn.jsdelivr.net/npm/tus-js-client@2.3.1/dist/tus.js')

export default async function uploadFile (fileObject, idx, cfg, self) {
  const proj = self.$parent.data
  const uploadinfo = await self.$root.request('get', 
    `${self.$store.state.site.api}/paro/${proj.call_id}/uploadinfo`)
  const filename = `${uploadinfo.path}/${idx}.jpg`

  await tus

  return new Promise((resolve, reject) => {
    var options = {
      endpoint: self.$store.state.site.uploadApi,
      metadata: {
        filename,
        Bearer: uploadinfo.token
      },
      uploadSize: fileObject.size,
      onError (error) {
        reject(error)
      },
      onSuccess () {
        resolve(filename.split('/').slice(1).join('/'))
      }
    }
    
    var upload = new window.tus.Upload(fileObject, options)
    upload.start()
  })
}