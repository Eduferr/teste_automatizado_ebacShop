# Usa a imagem base oficial do Cypress, já configurada com Node e dependências do Cypress
FROM cypress/base:latest

# Define o diretório de trabalho dentro do container
WORKDIR /home/cypress/

# Copia todo o conteúdo do projeto local para o diretório de trabalho no container
COPY . /home/cypress/

# Cria um volume para persistir os relatórios mochawesome fora do container
VOLUME [ "/home/cypress/mochawesome-report" ]

# Instala as dependências listadas no package.json
RUN npm install

# Limpa o cache do Cypress e reinstala a versão especificada no projeto
RUN npx cypress cache clear && \
    npx cypress install

# Define o comando padrão a ser executado quando o container iniciar
# Aqui, roda o script definido no package.json (cy:run:report)
CMD ["npm", "run", "cy:run:report"]
