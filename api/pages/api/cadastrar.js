// pages/api/cadastrar.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, email, telefone } = req.body;

        // Aqui você pode adicionar lógica para salvar os dados em um banco de dados ou processá-los
        console.log(`Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`);
        
        // Resposta de sucesso
        res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
