function crypto(password) {
    const mid = password.length / 2;
    const firstHalf = password.slice(0, mid);
    const secondHalf = password.slice(mid);
    let result = firstHalf.split('').reverse().join('') + secondHalf.split('').reverse().join('');
    return result.slice(0, result.length / 2) + result.split("")[result.length - 4] + result.split("")[result.length - 2] + result.split("")[result.length - 3] + result.split("")[result.length - 1];
}

function check(encrypted, original) {
    let decrypted = crypto(encrypted);
    return decrypted === original;
}


console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));
