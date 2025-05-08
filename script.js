const generateBtn = document.querySelector("#generate-btn");
const generatedPass = document.querySelector("#generated-password");


const getLetterLowerCase = () =>{
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () =>{
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () =>{
    const symbols = "!@#$%&*()-_=+~^[]{}\|/?:;,.<>";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLength; i = i + 4){
        generators.forEach(() =>{
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    generatedPass.style.display = "flex"
    generatedPass.querySelector("h4").innerText = password;
};

generateBtn.addEventListener('click', () =>{
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
});