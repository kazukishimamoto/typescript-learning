export {}

class Mahotsukai {}

class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  zaki(): void
  ionazun(): void
}

interface Senshi {
  kougeki(): void
}

class Jiro implements Kenja, Senshi {
  zaki(): void {
    console.log('zaki')
  }

  ionazun(): void {
    console.log('ionazun')
  }

  kougeki(): void {
    console.log('10ダメージ')
  }
}

const jiro = new Jiro()
jiro.kougeki()
jiro.zaki()
