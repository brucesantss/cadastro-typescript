import express from 'express';

const app = express();
const PORT = 8080;

//rota home
app.get('/home', (req, res) => {
    return res.status(200).json({ message: 'bem-vindo a home' });
})

//iniciando server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})