
function crypto(password) {
    const mid = Math.floor(password.length / 2);
    const firstHalf = password.slice(0, mid);
    const secondHalf = password.slice(mid);

    return firstHalf.split('').reverse().join('') + secondHalf.split('').reverse().join('');
}

function check(encrypted, original) {
    const mid = Math.floor(encrypted.length / 2);
    const firstHalf = encrypted.slice(0, mid);
    const secondHalf = encrypted.slice(mid);

    const decrypted = firstHalf.split('').reverse().join('') + secondHalf.split('').reverse().join('');
    return decrypted === original;
}


console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));
