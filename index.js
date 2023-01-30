import IndexPage from './pico/pages/index.js'
import CallPage from './pico/pages/call.js'
import FormPage from './pico/pages/form.js'
import DetailPage from './pico/pages/detail.js'

export async function setup (routes, path, cfg, _create) {
  
  routes.push({
    path,
    name: 'paroindex',
    component: _create(IndexPage, cfg)
  })

  routes.push({
    path: `${path}:call_id`,
    name: 'parocall',
    component: _create(CallPage, cfg)
  })

  const zadostCFG = Object.assign({}, cfg, {
    breadcrumbs: [{ link: path, title: cfg.title }],
    title: 'přidat nebo upravit projektový návrh'
  })
  routes.push({
    path: `${path}zadost`,
    name: 'paroform',
    component: _create(FormPage, zadostCFG)
  })

  const detailCFG = Object.assign({}, cfg, {
    breadcrumbs: [{ link: path, title: cfg.title }]
  })
  routes.push({
    path: `${path}:call_id/:id`,
    name: 'paroproject_detail',
    component: _create(DetailPage, detailCFG)
  })

}