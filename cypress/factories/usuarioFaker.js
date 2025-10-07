const { faker } = require('@faker-js/faker');

class UsuarioFaker {
    // Gera um usuário fictício para testes de cadastro e login
    static generateUser() {
        const nome = faker.person.firstName();
        const email = faker.internet.email(nome);
        const senha = '123456'; // Pode ser utilizando o faker.internet.password() se quiser mais realismo
        const username = email.split('@')[0].toLowerCase(); // Extrai o nome de usuário do email para validações

        return { nome, email, senha, username };
    }

    static generateInvalidEmail() {
        const emailInvalido = faker.internet.email(); // Gera uma string aleatória que não é um email válido
        return emailInvalido;
    }
}

module.exports = UsuarioFaker;
