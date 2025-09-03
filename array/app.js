function cryptoCode(cryptoPassword){
    return cryptoPassword.split('').reverse().join('');
}

function check(encrypt, cryptoOriginal){
    const decrypto = encrypt.split('').reverse().join('');
    return decrypto === cryptoOriginal;
}

console.log(cryptoCode('password'));
console.log(check('drowssap', 'password'));
console.log(check('drowssap', 'wrong'));


