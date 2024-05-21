FROM node:20

COPY . /patchikatcha-frontend/

WORKDIR /patchikatcha-frontend

RUN npm install

CMD ["npm", "run", "dev"]
