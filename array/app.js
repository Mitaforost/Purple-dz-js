function crypto(password) {
    const half = Math.floor(password.length / 2);

    const left = password.slice(0, half).split('').reverse().join('');
    const right = password.slice(half).split('').reverse().join('');

    return left + right;
}

function check(encrypted, original) {
    const half = Math.floor(encrypted.length / 2);

    const left = encrypted.slice(0, half).split('').reverse().join('');
    const right = encrypted.slice(half).split('').reverse().join('');

    return (left + right) === original;
}

console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));
