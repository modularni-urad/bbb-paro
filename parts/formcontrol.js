export default `
- name: name
  label: název projektu
  component: finput
  placeholder: dobře ho promyslete, měl by být výstižný
  rules: required
  class: is-half

- name: poloha
  label: poloha v mapě
  component: position_input
  rules: required
  class: is-half

- name: desc
  label: stručný popis projektu
  component: ftextarea
  rows: 3
  placeholder: stručný popis, který detailně rozvedete dále ...
  rules: required
  class: is-full

- name: content
  label: úplný popis projektu, rozvedení stručného popisu do podrobnějších detailů
  component: ftextarea
  rows: 8
  placeholder: tak do toho ... ;)
  rules: required
  class: is-full
  
- name: budget
  label: rozpočet projektu, opřený o nějakou referenci (eshop, konzultace se řemeslníkem)
  component: budgeteditor
  rules: required
  class: is-full

- name: photo
  label: obrazky
  component: images_editor
  rules: required
`