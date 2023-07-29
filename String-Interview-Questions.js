// How do you remove a given character from String?

const removeAllChar = (str, char) => {
    return str.split("").filter(c => c !== char).join("");
}

// console.log(removeAllChar('Hello World','l'));


// How do you remove a first character from String?

const removeFirstChar = (str, char) => {
    return str.replace(char,"");
}

console.log(removeFirstChar('Hello World','l'));