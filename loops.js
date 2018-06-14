function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
   i===1 ? arr.push(`I am ${i} strange loop`) : arr.push(`I am ${i} strange loops`)
  }
  return arr
 }