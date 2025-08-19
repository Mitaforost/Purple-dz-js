let languages = prompt("Введите определенный код языка из: en,ru,de,fr,pt");
switch (languages){
    case "en":
        console.log("Hello");
        break;
    case "ru":
        console.log("Привет");
        break;
    case "de":
        console.log("Hallo");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    case "pt":
        console.log("Olá");
        break;
    default:
        console.log("Введен не верный код языка");
        break;
}
