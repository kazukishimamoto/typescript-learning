export {}

interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}
let profile: Profile = {
  name: 'Kazuki',
  underTwenty: true,
}

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.age = 26
profile.nationality = 'Japan'
