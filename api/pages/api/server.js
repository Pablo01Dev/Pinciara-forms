// api/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para cadastrar dados
app.post('/cadastrar', (req, res) => {
    const { nome, email, telefone } = req.body;

    // Aqui você pode adicionar lógica para salvar os dados em um banco de dados ou processá-los
    console.log(`Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`);
    
    // Resposta de sucesso
    res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
});

// Rota para outros métodos
app.all('/cadastrar', (req, res) => {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
