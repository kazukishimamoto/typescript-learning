export {}

function error(message: string): never {
  throw new Error(message)
}

console.log('処理1')
console.log('処理2')

let result = 'hoge'
try {
  // 返り値が戻ってこないので、事前に代入した'hoge'のまま
  result = error('エラーが起きるよ')
} catch (error) {
  console.log({ error })
}

console.log(result)
console.log('処理3')

let foo: void = undefined
// let bar: never = null
let bar: never = error('only me')
// まとめ： 例外を起こす関数（＝ 返り値がない）はneverを使おうね
