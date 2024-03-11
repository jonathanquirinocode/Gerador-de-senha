//seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordBtn = document.querySelector("#generated-password");
//funções

const getLetterLowCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbols = () => {
    const symbols = "!@#$%&*()_+-={}[]?:><,.;/|";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

//eventos
generatePasswordBtn.addEventListener("click", () =>{

});