let tab = [[[1, 7, 3], [11, 17, 7], [-3, -5], [5, 13],], [[2, 4, 6, 8, 10], [1, 3, 5],], [[0]], [[0], [1], [2], [1]],]

let total = 0

for (let i = 0; i < tab.length; i++) {
  for (elem of tab[i]) {
    // console.log(elem)
    for (let j = 0; j < elem.length; j++) {
      total = total + elem[j]
      // console.log(elem[j])
    }
  }
} console.log(total)