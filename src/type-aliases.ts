export {}

type Mojiretsu = string
function returnMojiretsu(): Mojiretsu {
  let moji: Mojiretsu = 'hoge'
  return moji
}

const example1: Profile = {
  name: 'Ham',
  age: 43,
}

type Profile = {
  name: string
  age: number
}

type Profile2 = typeof example1
