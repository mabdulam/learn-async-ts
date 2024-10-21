// Function to check if a row contains a negative number
function checkRowForNegative(row: number[]): Promise<void> {
    return new Promise((resolve) => {
        const hasNegative = row.some(num => num < 0);
        if (hasNegative) {
            console.log(`Row with negative number: [${row.join(', ')}]`);
        }
        resolve();
    });
}

// Function to check all rows concurrently for negative numbers
function logRowsWithNegatives(arr: number[][]): Promise<void> {
    const rowPromises = arr.map(row => checkRowForNegative(row));
    return Promise.all(rowPromises).then(() => {
        console.log('Finished checking all rows.');
    });
}

// Example usage
const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D_3)
    .catch(err => console.error('Error:', err));
