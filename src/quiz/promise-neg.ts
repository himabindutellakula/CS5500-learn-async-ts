const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

/**
 * Checks if a given row in a 2D array contains any negative numbers.
 * Logs the row index and its contents if a negative number is found.
 * 
 * @param row - The row of numbers to check.
 * @param rowIdx - The index of the row in the 2D array.
 * @returns A promise that resolves after checking the row.
 */
function checkNegativeInArrayRow(row: number[], rowIdx: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Checking negatives in row ${rowIdx} ...`);
            if (row.some(num => num < 0)) {
                console.log(`Row ${rowIdx} has a negative number:`, row);
            }
            resolve();
        }, 0);
    });
}

/**
 * Asynchronously checks all rows in a 2D array for negative numbers using Promise.all().
 * This allows for concurrent execution of all row checks.
 */
console.log('Checking for negative numbers in 2D array...');

// Array to store promises for each row check
let arrayRowNegativeCheckPromises: Promise<void>[] = [];

// Iterate over each row and create a promise for checking negatives
for (let x = 0; x < array2D_3.length; x++) {
    arrayRowNegativeCheckPromises.push(checkNegativeInArrayRow(array2D_3[x], x));
}

// Execute all row checks concurrently using Promise.all()
Promise.all(arrayRowNegativeCheckPromises)
    .then(() => {
        console.log('Finished checking all rows.');
    })
    .catch((error) => console.log(`Error Msg: ${error}`));
