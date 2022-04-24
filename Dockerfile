# pull official base image
FROM node:alpine

# set working directory
WORKDIR /echo

# add `/echo/node_modules/.bin` to $PATH
ENV PATH /echo/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"] 