// server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());

// Dummy user data (replace with database logic)
const users = [
    { username: 'admin', password: bcrypt.hashSync('admin123', 8), role: 'admin' },
    { username: 'staff', password: bcrypt.hashSync('staff123', 8), role: 'staff' },
    { username: 'customer', password: bcrypt.hashSync('customer123', 8), role: 'customer' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user) return res.status(400).send('User not found');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    res.send({ message: 'Login successful', role: user.role });
});

app.listen(3000, () => console.log('Server running on port 3000'));
