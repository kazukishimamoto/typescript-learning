export {}

let profile1: object = {
  name: 'Kazuki',
}
profile1 = { birthYear: 1976 }
// console.log(profile1)

let profile2: { name: string; birthYear: number } = {
  name: 'Kazuki',
  birthYear: 0,
}
profile2 = { name: 'kazuki', birthYear: 1976 }
console.log(profile2)
