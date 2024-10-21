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

// Function to compute the sum of all rows concurrently
function sum2DArrayConcurrently(arr: number[][]): Promise<number> {
    // Create an array of promises, each summing one row
    const rowSums = arr.map(row => sumRow(row));

    // Use Promise.all to sum the rows concurrently
    return Promise.all(rowSums).then((rowResults) => {
        return rowResults.reduce((acc, curr) => acc + curr, 0);
    });
}

// Example usage
const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayConcurrently(array2D_1)
    .then(totalSum => console.log('Total sum:', totalSum))
    .catch(err => console.error('Error:', err));
