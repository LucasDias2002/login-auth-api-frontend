async function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let box = document.getElementById('messageLogin');
    box.innerHTML = "";

    try {
        console.log("Enviando requisição de login...");

        let data = await sendRequest('http://18.191.72.7:8080/auth/login', {
            email: email,
            password: password
        });

        console.log("Token gerado com sucesso: ", data);
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

        let data = await sendRequest('http://18.191.72.7:8080/auth/register', {
            name: name,
            email: email,
            password: password
        });

        console.log("Usuário registrado com sucesso: ", data);
        box.innerHTML = await addMessage("Cadastrado com sucesso!", "greenBox", "check");

    } catch (error) {
        box.innerHTML = await addMessage("Erro ao cadastrar usuário!", "redBox", "x");
        console.error("Erro:", error);
    }
}

async function sendRequest(url, body) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        return await response.json(); 
    } catch (error) {
        throw error; 
    }
}


async function addMessage(message, color, icon) {
    return `<div id="message" class="message ${color}">
            <div class="res">
                <i class="bi bi-${icon}"></i>
                <p>${message}</p>
            </div>
        </div>`;
}