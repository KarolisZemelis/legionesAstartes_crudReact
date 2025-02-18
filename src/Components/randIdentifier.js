export default function generateRandomCode(prefix) {
    let code = prefix;
    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates 0-9
        code += randomNumber;
    }

    return code;
}