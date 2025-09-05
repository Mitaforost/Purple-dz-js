function filterWithDeletion(arr, shouldDelete) {
    return arr.filter(item => !shouldDelete(item));
}

const arr = [3, 6, 9, 2];

function deleteIfGreaterThan5(num) {
    return num > 5;
}

console.log(filterWithDeletion(arr, deleteIfGreaterThan5));
