import React, { useState } from 'react';
import axios from 'axios';

const FormularioCadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('https://api.exemplo.com/cadastrar', formData);
            console.log('Cadastro realizado com sucesso:', response.data);
            // Aqui você pode redirecionar o usuário ou exibir uma mensagem de sucesso
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            // Aqui você pode exibir uma mensagem de erro
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default FormularioCadastro;
