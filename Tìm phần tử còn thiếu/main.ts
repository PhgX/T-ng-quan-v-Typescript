let findMissingElement = (a: number[], b: number[]  = [0,1,2,3,4,5,6,7,8,9]): number[] => {
  let c : number [] = [], x : number, missingElement : number[]; 
  let i = 0;
  // while (i < a.length) {
  //   x = b.indexOf(a[i]);
  //   if (x === -1) {
  //     c.push(a[i]);
  //   }
  //   i++;
  // }

  i = 0;
  while (i < b.length) {
    x = a.indexOf(b[i]);
    if (x === -1) {
      c.push(b[i]);
    }
    i++;
  }
  missingElement = c.sort(function(a:number,b:number){return a - b})
  return missingElement;
}

console.log(findMissingElement([2,4,5]))
