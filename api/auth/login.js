function handler(req, res) {
    const { username, password } = req.body;

    if (username !== 'satria' || password !== '1234') {
        return res.status(401).json({ error: 'Username atau password salah!' });
    }

    res.status(204).json();
}

module.exports = handler;
