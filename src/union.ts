export {}

let value: number | string = 1
value = '1'

if (typeof value === 'string') {
  value = parseInt(value)
}
console.log(value)
