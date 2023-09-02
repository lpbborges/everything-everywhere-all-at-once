export function countingSort(arr) {
    const countingArr = Array.from({ length: 100 }).fill(0);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 100) {
            countingArr[arr[i]] += 1;
        }
    }

    return countingArr;
}
