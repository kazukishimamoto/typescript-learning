export {}

class Me {
  static isProgrammer: boolean = true
  static firstName: string = 'Kazuki'
  static lastName: string = 'Shimamoto'

  static work(): string {
    return `Hey, guys! This is ${this.firstName} ${this.lastName}! Are yop interested in TypeScript? Let's dive into TypeScript!`
  }
}

console.log(Me.firstName)
console.log(Me.isProgrammer)
console.log(Me.work())
// let me = new Me()
// console.log(me.isProgrammer)
// console.log(me.firstName)

class Human {
  static whatKind: string = 'Human'
}

class Japanese extends Human {
  static whatKind: string = 'Japanese'
}

console.log(Human.whatKind)
console.log(Japanese.whatKind)
