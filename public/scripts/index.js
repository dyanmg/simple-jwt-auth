async function main() {
    const user = await getUser();
    document.getElementById('name').innerText = user.name;
}

main();