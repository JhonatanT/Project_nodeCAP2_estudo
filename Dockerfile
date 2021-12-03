FROM node

WORKDIR /

COPY package.json ./

RUN npm install -g npm@8.1.4

COPY . .

EXPOSE 3030

CMD ["npm","run","dev"]