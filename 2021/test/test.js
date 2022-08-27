function jumpFloor (n) {
  if (n === 0 || n === 1) return n
  let a = 1; let b = 1; let c
  for (let i = 2; i <= n; ++i) {
    c = a + b
    a = b
    b = c
  }
  return c
}

const a = jumpFloor(99)
console.log(a)
