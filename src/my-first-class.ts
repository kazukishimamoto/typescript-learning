export {}

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }

  greet(): void {
    console.log(`hi! I\'m ${this.name}.`)
  }
}
let taro = new Person('taro', 25)
console.log(taro.profile())
taro.greet()
// let hanako = new Person()
