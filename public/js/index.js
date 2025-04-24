async function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let box = document.getElementById('messageLogin');
    box.innerHTML = "";

    try {
        console.log("Enviando requisição de login...");

        let response = await fetch('http://18.191.72.7:8080/auth/login', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        let data = await response.json();
        console.log("Token gerado com sucesso: \n")

        box.innerHTML = await addMessage("Login feito com sucesso!", "greenBox", "check");

    } catch (error) {
        box.innerHTML = await addMessage("Erro ao efetuar login!", "redBox", "x");

        console.error("Erro:", error);
    }

}

async function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let box = document.getElementById('messageRegister');
    box.innerHTML = "";

    try {
        console.log("Enviando requisição de registro...");

        let response = await fetch('http://18.191.72.7:8080/auth/register', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        let data = await response.json();
        console.log("Token gerado com sucesso: \n")

        box.innerHTML = await addMessage("Cadastrado com sucesso!", "greenBox", "check");

    } catch (error) {
        box.innerHTML = await addMessage("Erro ao efetuar cadastrar!", "redBox", "x");

        console.error("Erro:", error);
    }
}

async function addMessage(message, color, icon) {
    return `<div id="message" class="message ${color}">
            <div class="res">
                <i class="bi bi-${icon}"></i>
                <p>${message}</p>
            </div>
        </div>`
}