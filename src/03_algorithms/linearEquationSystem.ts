const A = [
  [3, 2, -1],
  [2, -2, 4],
  [-1, 0.5, -1],
];
const b = [1, -2, 0];
// solution is [1, -2, -2]

// Solve A*x=b for x
// minimize numerical error by pivoting
function solve(A: number[][], b: number[]) {
  const n = A.length;
  const x = new Array(n).fill(0);
  const A_ = A.map((row) => [...row]);
  const b_ = [...b];

  // forward elimination
  for (let k = 0; k < n - 1; k++) {
    // find pivot
    let max = Math.abs(A_[k][k]);
    let maxRow = k;
    for (let i = k + 1; i < n; i++) {
      if (Math.abs(A_[i][k]) > max) {
        max = Math.abs(A_[i][k]);
        maxRow = i;
      }
    }

    // swap rows
    for (let i = k; i < n; i++) {
      const temp = A_[k][i];
      A_[k][i] = A_[maxRow][i];
      A_[maxRow][i] = temp;
    }
    const temp = b_[k];
    b_[k] = b_[maxRow];
    b_[maxRow] = temp;

    // elimination
    for (let i = k + 1; i < n; i++) {
      const factor = A_[i][k] / A_[k][k];
      for (let j = k + 1; j < n; j++) {
        A_[i][j] -= factor * A_[k][j];
      }
      b_[i] -= factor * b_[k];
    }
  }

  // back substitution
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += A_[i][j] * x[j];
    }
    x[i] = (b_[i] - sum) / A_[i][i];
  }

  return x;
}

console.log(solve(A, b));
