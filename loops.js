function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
   i===1 ? arr.push(`I am ${i} strange loop.`) : arr.push(`I am ${i} strange loops.`)
  }
  return arr
 }
 
 function whileLoop(n) {
   while(n>0) {
     console.log(n)
     n--
   }
   return 'done'
 }
 
 function doWhileLoop(arr) {
  do{
    arr.pop()
  }
  while (maybeTrue()=== true)
  
  return arr
 }
 
 function maybeTrue() {
  return Math.random() >= 0.5
}