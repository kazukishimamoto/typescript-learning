export {}

class Person {
  public name: string
  protected age: number
  protected nationality: string

  constructor(name: string, age: number, nationality: string = 'Japan') {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }

  greet(): void {
    console.log(`hi! I\'m ${this.name}.`)
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }

  private(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let taro = new Person('taro', 25, 'Japan')
console.log(taro.name)
console.log(taro.profile())

let peppar = new Android('peppar', 10, 'Japan')
console.log(peppar.profile())
