
const A = [
    [3, 2, -1],
    [2, -2, 4],
    [-1, 0.5, -1]
]
const b = [1, -2, 0]
// solution is 

// A is a matrix, b a vecor. Solve A*x=b for x
// minimize numerical errors by pivoting
function solve(A: number[][], b: number[]): number[] {
    const n = A.length;
    const x = new Array(n).fill(0);

    // forward elimination
    for (let k = 0; k < n - 1; k++) {
        // find pivot
        let iMax = k;
        let max = Math.abs(A[k][k]);
        for (let i = k + 1; i < n; i++) {
            const abs = Math.abs(A[i][k]);
            if (abs > max) {
                iMax = i;
                max = abs;
            }
        }

        // swap rows
        for (let j = k; j < n; j++) {
            const temp = A[k][j];
            A[k][j] = A[iMax][j];
            A[iMax][j] = temp;
        }
        const temp = b[k];
        b[k] = b[iMax];
        b[iMax] = temp;

        // eliminate
        for (let i = k + 1; i < n; i++) {
            const factor = A[i][k] / A[k][k];
            for (let j = k + 1; j < n; j++) {
                A[i][j] -= factor * A[k][j];
            }
            b[i] -= factor * b[k];
        }
    }

    // backward substitution
    x[n - 1] = b[n - 1] / A[n - 1][n - 1];
    for (let i = n - 2; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += A[i][j] * x[j];
        }
        x[i] = (b[i] - sum) / A[i][i];
    }

    return x;
}

console.log(solve(A, b));