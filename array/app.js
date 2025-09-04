function crypto(password) {
    const mid = password.length / 2;
    const firstHalf = password.slice(0, mid);
    const secondHalf = password.slice(mid);
    let result = firstHalf.split('').reverse().join('') + secondHalf.split('').reverse().join('');
    return result.slice(0, result.length / 2) + result.split("")[result.length - 4] + result.split("")[result.length - 2] + result.split("")[result.length - 3] + result.split("")[result.length - 1];
}

function decrypt(encrypted) {
    const length = encrypted.length;
    const mid = length / 2;

    const base = encrypted.slice(0, mid);
    const lastFour = encrypted.slice(mid);

    const restoredLastFour = lastFour[0] + lastFour[2] + lastFour[1] + lastFour[3];

    const fullString = base + restoredLastFour;
    const firstHalf = fullString.slice(0, mid);
    const secondHalf = fullString.slice(mid);

    return firstHalf.split('').reverse().join('') + secondHalf.split('').reverse().join('');
}

function check(encrypted, original) {
    let decrypted = decrypt(encrypted);
    return decrypted === original;
}

// Тестирование
console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));