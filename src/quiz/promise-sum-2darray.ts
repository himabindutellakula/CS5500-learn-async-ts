const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function sumOfArrayRow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length > rowIdx) {
                let sum = 0;
                console.log(`Computing sum of row ${rowIdx} ... `);
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }
            else {
                reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
            }}, 
        0);
    });
}

// using Promise.all

// let arrayRowSumPromises: Promise<number>[] = [];
// for (let x = 0; x < array2D_1.length; x++) {
//     arrayRowSumPromises.push(sumOfArrayRow(array2D_1, x));
// }
// Promise.all(arrayRowSumPromises)
//     .then((rowSums) => {
//         let sum = 0;
//         console.log('Computing sum of all rows ... ');
//         rowSums.forEach(rowSum => {
//             sum += rowSum;
//         });
//         console.log(`Sum = ${sum}`);
//     })
//     .catch((error) => console.log(`Error Msg: ${error}`));

// console.log('Computing sum of 2D array ... ');


//using async and await
//to simplify Promise.all logic
async function asyncArraySum() {
    try {
        console.log('Computing sum of 2D array ...');
        let arrayRowSumPromises: Promise<number>[] = [];
        for (let rowIdx = 0; rowIdx < array2D_1.length; rowIdx++) {
            arrayRowSumPromises.push(sumOfArrayRow(array2D_1, rowIdx));
        }
        let totalSum = 0;
        for await (const rowSum of arrayRowSumPromises) {
            totalSum += rowSum;
        }
        console.log(`Sum = ${totalSum}`);
    } catch (error) {
        console.error(`Error Msg: ${error}`);
    }
}

asyncArraySum();