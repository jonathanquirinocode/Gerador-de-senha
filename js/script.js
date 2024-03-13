//seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const openCloseGenerateBtn = document.querySelector("#open-generate-password")
const generateOptionsContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordBtn = document.querySelector("#copy-password");
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

const generatePassword = (getLetterLowCase, getLetterUpperCase, getNumber, getSymbols) => {
    
    let password = "";

    const passwordLength = lengthInput.value;

    const generators = [];

    if(lettersInput.checked){
        generators.push(getLetterLowCase, getLetterUpperCase);
    };

    if(numbersInput.checked){
        generators.push(getNumber);
    }
    if(symbolsInput.checked){
        generators.push(getSymbols);
    }
    if(generators.length === 0){
        return
    }

    for (i = 0; i < passwordLength; i = i + generators.length){
        generators.forEach(() => {
            const randomValue = 
                generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    };

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;

};

//eventos
generatePasswordBtn.addEventListener("click", () =>{
    generatePassword(
        getLetterLowCase,
        getLetterUpperCase,
        getNumber, getSymbols
    );
});

openCloseGenerateBtn.addEventListener("click", () =>{
    generateOptionsContainer.classList.toggle("hide");
});

//copiar

copyPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const password = generatedPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordBtn.innerText = "Senha copiada";

        setTimeout(() => {
            copyPasswordBtn.innerText = "Copiar";
        }, 1500);
    });
});
