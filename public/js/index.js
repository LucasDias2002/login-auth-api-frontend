document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(email)

    fetch('http://127.0.0.1:8080/auth/login', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Erro:', error));
});

document.getElementById('register').addEventListener('click', () => {
    alert("Ola")
})