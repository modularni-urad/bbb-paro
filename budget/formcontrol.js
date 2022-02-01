export default `
- name: name
  label: název položky
  component: input
  placeholder: co je třeba pro projekt
  rules: required

- name: count
  label: počet jednotek
  component: input
  type: number
  placeholder: kolik toho bude potřeba ...
  rules: required

- name: price
  label: cena za jednotku
  component: input
  type: number
  placeholder: kolik to stojí ...
  rules: required

- name: link
  label: odkaz
  component: input
  type: number
  placeholder: odkaz na eshop ...
`