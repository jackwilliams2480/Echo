# pull official base image
FROM node:alpine

# set working directory
WORKDIR /server

# add `/echo/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["node", "."] 