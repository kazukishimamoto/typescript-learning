export {}

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string,
    ) {}
  }
}
const me = new Japanese.Tokyo.Person('Kazuki')
console.log(me.name)

const you = new Japanese.Osaka.Person('Hamやん')
console.log(you.name)

const michael = new English.Person('Michael', 'Joseph', 'Jackson')
console.log(michael)
