export {}

type Profile = {
  name: string
  age?: number
  zipCode: number
}

type PartialType = Partial<Profile>

type RequireType = Required<Profile>

let profile: PartialType = {
  // name: 'Kazuki',
  // age: 26,
}

let profile2: RequireType = {
  name: 'Kazuki',
  age: 26,
  zipCode: 5555555,
}
