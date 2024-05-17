const form = document.getElementById('login');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const errorElement = document.getElementById('error');

    try {
        await login(username, password);
        errorElement.innerText = "Login berhasil!";
    } catch (error) {
        errorElement.innerText = error;
    }

    e.target.reset();
    return false;
})