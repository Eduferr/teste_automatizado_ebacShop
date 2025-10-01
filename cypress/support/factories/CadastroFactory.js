const { faker } = require('@faker-js/faker');

class CadastroFactory {
    static generateUser() {
        const nome = faker.person.firstName();
        const email = faker.internet.email(nome);
        const senha = '123456'; // Pode ser utilizando o faker.internet.password() se quiser mais realismo
        const username = email.split('@')[0].toLowerCase(); // Extrai o nome de usuário do email para validações

        return { nome, email, senha, username };
    }
}

module.exports = CadastroFactory;
