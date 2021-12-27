export {}

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('かずき')
console.log(myVisaCard.owner)
// myVisaCard.owner = 'ベーコン'
