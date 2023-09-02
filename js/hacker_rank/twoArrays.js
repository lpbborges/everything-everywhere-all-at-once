export function twoArrays(k, A, B) {
    const RETURN_VALUES = new Map();
    RETURN_VALUES.set(true, "YES");
    RETURN_VALUES.set(false, "NO");

    A.sort((a,b) => a - b);
    B.sort((a, b) => b - a);

    const result = A.every((v, idx) => v + B[idx] >= k);

    return RETURN_VALUES.get(result);
}
