export {}

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

function convertJapaneseMonth(month: number): string {
  return `${month.toString()}月`
}
console.log(convertJapaneseMonth(Months.April))

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

let green = COLORS.GREEN
console.log(green)
COLORS.YELLOW
