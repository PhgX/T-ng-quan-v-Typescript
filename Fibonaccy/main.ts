let n: number;
let n1 = 0;
let n2 = 1;
let nextterm: number;
let sum = 1;
let fibonacci: number[] = [];
let i = -1;

// let do_sum_fibonacci = (n: number): any => {
//   for (let i = 0; i < n; i++) {
//     nextterm = n1 + n2;
//     n1 = n2;
//     n2 = nextterm;
//     fibonacci.push(nextterm);
//     sum += nextterm;
//   }
//   return `Dãy số fibonacci ${fibonacci} với ${n} số có tổng là ${sum}`;
// };
// console.log(do_sum_fibonacci(10));

function do_sum_fibonacci(n: number) {
  i++;
  if (i < n) {
    nextterm = n1 + n2;
    n1 = n2;
    n2 = nextterm;
    fibonacci.push(nextterm);
    sum += nextterm;
    do_sum_fibonacci(n);
  }
  return `Dãy số fibonacci ${fibonacci} với ${n} số có tổng là ${sum}`;
}
console.log(do_sum_fibonacci(10));