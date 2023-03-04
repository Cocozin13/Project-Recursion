function fibs(n) {
        if (n <= 1) {
          return n;
        }
        return fibs(n - 1) + fibs(n - 2);
}

function fibsSequence(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
      sequence.push(fibs(i));
    }
    return sequence;
  }            

console.log(fibsSequence(2))