const arrayDate = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function isValidDate(day, month, year) {
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;

    return true;
}

function dataSort(arr) {
    const result = [];

    for (let str of arr) {
        let parts;
        let isSlash = false;

        if (str.includes('-')) parts = str.split('-');
        else if (str.includes('/')) {
            parts = str.split('/');
            isSlash = true;
        }
        else continue;

        if (parts.length !== 3) continue;

        let d, m, y;

        if (isSlash) {
            [m, d, y] = parts;
        } else {
            [d, m, y] = parts;
        }

        if (!isValidDate(d, m, y)) continue;

        result.push(`${d.padStart(2,'0')}-${m.padStart(2,'0')}-${y}`);
    }

    return result;
}

console.log(dataSort(arrayDate));
