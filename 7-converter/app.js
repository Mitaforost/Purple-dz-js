function convertCurrency(amount, fromCurrency, toCurrency) {
    fromCurrency = fromCurrency.toLowerCase();
    toCurrency = toCurrency.toLowerCase();

    if (fromCurrency === toCurrency) {
        return amount;
    }

    switch (fromCurrency) {
        case "rub":
            if (toCurrency === "usd") {
                return amount * 0.01;
            } else if (toCurrency === "eur") {
                return amount * 0.0095;
            } else {
                return null;
            }

        case "usd":
            if (toCurrency === "rub") {
                return amount * 100;
            } else if (toCurrency === "eur") {
                return amount * 0.95;
            } else {
                return null;
            }

        case "eur":
            if (toCurrency === "rub") {
                return amount * 105;
            } else if (toCurrency === "usd") {
                return amount * 1.05;
            } else {
                return null;
            }

        default:
            return null;
    }
}

console.log(convertCurrency(1000, "rub", "usd"));
console.log(convertCurrency(50, "usd", "rub"));
console.log(convertCurrency(100, "eur", "usd"));
console.log(convertCurrency(100, "rub", "jpy"));
console.log(convertCurrency(100, "usd", "usd"));
