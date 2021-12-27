export {}

abstract class Animal {
  abstract cry(): string
}

class Lion extends Animal {
  cry(): string {
    return 'roar'
  }
}

class Tiger extends Animal {
  cry(): string {
    return 'grrr'
  }
}

let lion = new Lion()
let tiger = new Tiger()
console.log(lion.cry())
console.log(tiger.cry())
