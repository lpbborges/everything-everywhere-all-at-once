function lonelyinteger(a) {
    let already = new Set();
    let value = a.pop();

    while (value) {
        if (!already.has(value) && !a.some(v => v === value)) {
            break;
        }
        already.add(value);
        value = a.pop();
    }

    return value;
}
