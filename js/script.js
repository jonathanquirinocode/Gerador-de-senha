//seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
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

    const passwordLength = 10;

    const generators = [
        getLetterLowCase,
        getLetterUpperCase,
        getNumber, getSymbols
    ];

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
    )
});