const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

const generateButton = document.querySelector("#generatePassword");
const passwordOne = document.querySelector(".passwordOne");
const passwordTwo = document.querySelector(".passwordTwo");
const passwordLengthInput = document.querySelector("#passwordLength");

function generatePassword(length, characters, maxRetries) {
    let lastChar = "";
    return Array.from({ length }, () => {
        let nextChar,
            retries = 0;
        do {
            nextChar =
                characters[Math.floor(Math.random() * characters.length)];
            retries++;
            if (retries > maxRetries) {
                break;
            }
        } while (lastChar === nextChar);
        lastChar = nextChar;
        return nextChar;
    }).join("");
}

/* one way to generate password with for loop
function generatePassword() {
    let result = [];
    let oldChar = "";
    let retries = 0;
    for (let i = 0; i < 15; i++) {
        let currentChar;
        do {
            let randomNum = characters[Math.floor(Math.random() * characters.length)];
            currentChar = characters[randomNum];
            retries++;
            if (retries > 5) {
                result.push(currentChar);
                break;
            }
        } while (oldChar === currentChar);

        if (retries <= 5) {
            result.push(currentChar);
            oldChar = currentChar;
            retries = 0;
        } else {
            break;
        }
    }
    return result.join("");
}
*/
async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log(`Text copied to clipboard: ${text}`);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

function copyPassword(e) {
    const password = e.target.textContent;
    if (password.length > 0) {
        copyTextToClipboard(password);
    } else {
        console.log("Can't copy empty passwords");
    }
}

generateButton.addEventListener("click", () => {
    const length = parseInt(passwordLengthInput.value, 10) || 15;
    passwordOne.textContent = generatePassword(length, characters, 5);
    passwordTwo.textContent = generatePassword(length, characters, 5);
});

passwordOne.addEventListener("click", (e) => {
    copyPassword(e);
});

passwordTwo.addEventListener("click", (e) => {
    copyPassword(e);
});
// loop through array 15 times, or however long the user want
// access a random character with random index
// can only access that character once
// if already accessed, generate a new number
// put that into new empty array
// join together
