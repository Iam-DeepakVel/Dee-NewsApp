FROM node:18-alpine
WORKDIR /usr/src/deenewsapp
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm install
RUN npm run build
CMD ["npm","start"]