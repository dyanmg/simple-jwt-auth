async function getUser() {
    const response = await fetch('/api/user');
    return response.json();
}

async function postJSON(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;
}

async function login(username, password) {
    const result = await postJSON('/api/auth/login', {
        username: username,
        password: password
    });

    if (!result.ok) {
        const { error } = await result.json();
        throw error;
    }
}