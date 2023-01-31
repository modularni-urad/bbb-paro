export default `
- name: name
  label: název projektu
  component: input
  placeholder: dobře ho promyslete, měl by být výstižný
  rules: required
  span: 2

- name: poloha
  label: poloha v mapě
  component: PositionInput
  rules: required
  span: 2

- name: desc
  label: stručný popis projektu
  component: textarea
  rows: 3
  placeholder: stručný popis, který jasně popíše co je vaším cílem ...
  rules: required

- name: content
  label: úplný popis projektu
  component: textarea
  rows: 8
  placeholder: rozveďte stručný popis do podrobnějších detailů (můžete použít markdown)
  rules: required
  
- name: budget
  label: rozpočet projektu, opřený o nějakou referenci (eshop, konzultace se řemeslníkem)
  component: BudgetEditor
  rules: required

- name: photo
  label: obrazky
  component: ImagesEditor
  rules: required
`