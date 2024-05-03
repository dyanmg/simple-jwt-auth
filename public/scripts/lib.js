async function getUser() {
    const response = await fetch('/api/user');
    return response.json();
}