document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername= "Satria";
    const correctPassword= "12345";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword){
        alert('Login Berhasil');
        window.location.href = 'index.html'
    }else{
        alert('Username atau Password salah');
    }
});

