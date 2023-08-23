function matchingStrings(strings, queries) {
    const result = queries.map(q => {
        return strings.filter(s => s === q).length;
    })

    return result;
}

