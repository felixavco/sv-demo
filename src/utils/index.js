export const url = (urlpath = '') => `https://jsonplaceholder.typicode.com${urlpath}`;

export const isEmpty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

export const removeDuplicates = arr => {
    //* Removing duplicate objects from list
    const seen = new Set();
    const filteredList = arr.filter(el => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
    });

    return filteredList
}