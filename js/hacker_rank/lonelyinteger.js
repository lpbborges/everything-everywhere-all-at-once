export function lonelyinteger(a) {
    let visited = new Set();
    let value = a.pop();

    while (value !== undefined) {
        if (!visited.has(value) && !a.some(v => v === value)) {
            break;
        }
        visited.add(value);
        value = a.pop();
    }

    return value;
}
