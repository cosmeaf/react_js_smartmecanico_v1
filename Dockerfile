# A imagem base será Ubuntu
FROM ubuntu:20.04

# Evitar problemas com perguntas do frontend durante a instalação de pacotes
ENV DEBIAN_FRONTEND=noninteractive

# Atualizar o sistema e instalar os pacotes necessários
RUN apt-get update && \
    apt-get install -y curl gnupg2 ca-certificates lsb-release && \
    echo "deb http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | tee /etc/apt/sources.list.d/nginx.list && \
    curl -fsSL https://nginx.org/keys/nginx_signing.key | apt-key add - && \
    apt-get update && \
    apt-get install -y nginx && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto dos arquivos do aplicativo
COPY . .

# Construir o aplicativo para produção
RUN npm run build

# Copiar a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remover o conteúdo padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Mover o aplicativo construído para o diretório do nginx
RUN mv build/* /usr/share/nginx/html

# Expor a porta 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]