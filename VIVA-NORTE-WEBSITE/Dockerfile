# Use a imagem oficial do Node.js com uma tag específica (e.g., LTS)
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie apenas os arquivos necessários (package.json, package-lock.json) para aproveitar o cache da camada de construção
COPY package.json .
COPY package-lock.json .

# Instale as dependências (incluindo o Vite) no contêiner
RUN npm install

# Exponha a porta que a aplicação Vite utiliza
EXPOSE 5173

# Comando padrão para iniciar o servidor Vite
CMD ["npm", "run", "dev"]