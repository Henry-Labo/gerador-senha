function getCharTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;

    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number) {
        charTypes.push('0123456789');
    }

    if (specialCharacter) {
        charTypes.push('!@#$%^&*()_+[]{}|;:,.<>?');
    }

    return charTypes;
}

    function getPasswordSize() {

        const size = parseInt(document.querySelector('#size').value);
    
        if (isNaN(size) || size < 6 || size > 128) {

            alert('Tamanho de senha inválido, digite um número entre 6 e 128.');
            return null;

        }
    
        return size;

    }

    function randomCharType(charTypes) {
        const randomIndex = Math.floor(Math.random() * charTypes.length);
        const chars = charTypes[randomIndex];
        return chars[Math.floor(Math.random() * chars.length)];
    
    }

function generatePassword(size, charTypes) {
    let passwordGenerated = '';

    while (passwordGenerated.length < size) {
        passwordGenerated += randomCharType(charTypes);
    }

    return passwordGenerated;
}


document.querySelector('#generate').addEventListener('click', function() {
    const size = getPasswordSize();
    const charTypes = getCharTypes();

    if (!size) {
        return;
    }
    
    if (!charTypes.length) {
        alert('Selecione ao menos um tipo de caractere.');
        return;
    }

    const passwordGenerated = generatePassword(size, charTypes);

    document.querySelector('#password_container').classList.add('show');
    document.querySelector('#password').textContent = passwordGenerated;
});

document.querySelector('#copy').addEventListener('click', function () {
    const password = document.querySelector('#password').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada para a área de transferência!');
    });
});
