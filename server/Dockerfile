# COMPOSER
FROM composer as composer

# node and MIX
FROM node:14-alpine as mix

RUN mkdir -p /api
# change workdir
WORKDIR /api

# copy package.json
COPY package.json .
COPY yarn.lock .

RUN mv ormconfig.docker.json ormconfig.json

RUN npm install --global yarn --force
RUN yarn global add nodemon

RUN yarn install

EXPOSE 3000

RUN yarn typeorm migration:run
RUN yarn seed:run

#RUN yarn build
#RUN yarn start

CMD ["yarn", "dev"]
