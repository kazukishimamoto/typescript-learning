export {}

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない

class MyNumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner(): string {
    return this._owner
  }

  set secretNumber(num: number) {
    this._secretNumber = num
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard('Kazuki', 123456789)
console.log(card.owner)
console.log(card.debugPrint())
card.secretNumber = 99999999999
console.log(card.debugPrint())
