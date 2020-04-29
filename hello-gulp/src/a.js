let a = 123

const c = (() => {
  console.log(a)
  a++
  console.log(b)
})()
