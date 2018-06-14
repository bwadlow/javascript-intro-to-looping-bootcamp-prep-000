function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
   i===1 ? arr.push(`I am ${i} strange loop.`) : arr.push(`I am ${i} strange loops.`)
  }
  return arr
 }
 
 function whileLoop(n) {
   if(n===0) return 0
   else {
     return n + (whileLoop(n-1))
   }
 }