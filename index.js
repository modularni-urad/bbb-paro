import IndexPageFN from './pages/index.js'
import FormPageFN from './pages/form.js'
import DetailPageFN from './pages/detail.js'

export async function setup (routes, path, cfg, _create) {
  
  routes.push({
    path,
    name: 'paroindex',
    component: _create(IndexPageFN, cfg, ['index', 'project_card'])
  })

  const zadostCFG = Object.assign({}, cfg, {
    breadcrumbs: [{ link: path, title: cfg.title }],
    title: 'přidat nebo upravit projektový návrh'
  })
  routes.push({
    path: `${path}zadost`,
    name: 'paroform',
    component: _create(FormPageFN, zadostCFG, ['form', 'budgeteditor', 'position_input'])
  })

  const detailCFG = Object.assign({}, cfg, {
    breadcrumbs: [{ link: path, title: cfg.title }]
  })
  routes.push({
    path: `${path}:call_id/:id`,
    name: 'paroproject_detail',
    component: _create(DetailPageFN, detailCFG, ['detail', 'likebutton'])
  })

}