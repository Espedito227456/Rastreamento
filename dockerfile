# Usar a imagem oficial do Node.js (versão 22.8.0-slim)
FROM node:22.8.0-slim

# Instalar pacotes necessários: OpenSSL, Procps, e MongoDB Client
RUN apt-get update && apt-get install -y \
    openssl \
    procps \
    wget \
    gnupg \
    && wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg \
    && echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/debian bookworm/mongodb-org/6.0 main" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list \
    && apt-get update \
    && apt-get install -y mongodb-mongosh \
    && rm -rf /var/lib/apt/lists/*  # Limpar o cache do apt para reduzir o tamanho da imagem

# Criar e definir o diretório de trabalho
WORKDIR /home/node/app

# Copiar o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto para o contêiner
COPY . .

# Expor a porta em que o aplicativo irá rodar (ajuste conforme necessário)
EXPOSE 8080

# Definir o comando padrão para iniciar o aplicativo
CMD ["npm", "start"]
