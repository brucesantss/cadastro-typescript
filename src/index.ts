import express from 'express';

//usuário rotas
import userRoutes from './routes/userRoutes';

//banco de dados
import db from './config/database';

const app = express();
const PORT = 8080;

//compatibilidade
app.use(express.json());

//rota home
app.get('/home', (req, res) => {
    return res.status(200).json({ message: 'bem-vindo a home' });
})

//rota de cadastro
app.use('/signup', userRoutes)

//iniciando server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

//status banco de dados
db.on('open', () => console.log('bank status: on-line'))
db.once('close', () => console.log('bank status: off-line'))
