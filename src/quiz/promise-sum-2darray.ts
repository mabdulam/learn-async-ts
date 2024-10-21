// Function to compute the sum of a single row
function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        let rowSum = 0;
        for (let num of row) {
            rowSum += num;
        }
        resolve(rowSum);
    });
}

// Async function to compute the sum of all rows concurrently
async function sum2DArrayConcurrently(arr: number[][]): Promise<number> {
    const rowSums = await Promise.all(arr.map(row => sumRow(row)));  // Wait for all row sums to resolve
    const totalSum = rowSums.reduce((acc, curr) => acc + curr, 0);   // Calculate the total sum
    return totalSum;
}

// Example usage
const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function runSumExample() {
    try {
        const totalSum = await sum2DArrayConcurrently(array2D_1);
        console.log('Total sum:', totalSum);
    } catch (err) {
        console.error('Error:', err);
    }
}

runSumExample();
