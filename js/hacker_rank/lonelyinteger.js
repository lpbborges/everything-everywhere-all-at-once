function lonelyinteger(a) {
    let value = null;
    let visited = new Set();

    for (let i = 0; i < a.length; i++) {
        value = a[i];

        if (!visited.has(value) && a.filter(v => v === value).length === 1) {
            break;
        }

        visited.add(value);
    }

    return value;
}
