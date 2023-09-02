export function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort();

    const {min, max} = sortedArr.reduce((sumObj, curr, idx) => {
        return {
            min: idx < sortedArr.length - 1  ? sumObj.min + curr : sumObj.min, 
            max: idx > 0 ? sumObj.max + curr : sumObj.max

        };
    }, 
        {min: 0, max: 0}
    );

    console.log(`${min} ${max}`);

    return [min, max];
}
