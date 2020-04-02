function bubbleSSort(arr) {
  for (let j = arr.length; j >= 2; j--) {
    for (let i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
  return arr
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let left = []
  let right = []
  let current = arr.splice(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > current) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}

function quickSort1(arr) {}

function test(fn) {
  function assert(arr, expect) {
    let arrStr = fn(arr.concat([])).toString()
    if (arrStr === expect) {
      console.log(fn.name + 'is OK')
    } else {
      console.log(fn.name + 'is error: ' + arrStr + '//' + expect)
    }
  }
  assert([9, 8, 4, 7, 1, 2, 3, 5, 6, 8, 0], '0,1,2,3,4,5,6,7,8,8,9')
  assert([2, 6, 9, 3, 7, 2, 54, 6, 22, 23, 5, 6, 2, 1], '1,2,2,2,3,5,6,6,6,7,9,22,23,54')
}

test(bubbleSSort)
test(insertSort)
test(quickSort)
