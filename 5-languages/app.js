let languages = prompt("Введите определенный код языка из: en,ru,de,fr,pt");
switch (languages){
    case "en":
        alert("Hello");
        break;
    case "ru":
        alert("Привет");
        break;
    case "de":
        alert("Hallo");
        break;
    case "fr":
        alert("Bonjour");
        break;
    case "pt":
        alert("Olá");
        break;
    default:
        alert("Введен не верный код языка");
        break;
}
