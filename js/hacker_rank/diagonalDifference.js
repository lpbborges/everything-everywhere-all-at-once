export function diagonalDifference(arr) {
    let leftToRighDiagonal = 0;
    let rightToLeftDiagonal = 0;
    const lastIndex = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                leftToRighDiagonal += arr[i][j];
            }
            if (j === lastIndex - i) {
                rightToLeftDiagonal += arr[i][j];
            }
        }
    }

    return Math.abs(leftToRighDiagonal - rightToLeftDiagonal);
}
