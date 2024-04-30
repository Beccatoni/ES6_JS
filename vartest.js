const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

function sum() {
    let total = 0;  
    for(const argument of arguments) {
      total += argument;
    }
    return total;
  }

  console.log(sum(1,2,4));