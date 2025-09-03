function crypto(password) {
    return password.split('').reverse().join('');
}


function check(encrypted, original) {
    const decrypted = encrypted.split('').reverse().join('');
    return decrypted === original;
}


console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));
