FROM node:12-alpine

# Creates build folder in backend` home
RUN mkdir -p /home/backend/app

# Sets as default folder
WORKDIR /home/backend/app

# Copies the main project to app folder
COPY . ./

# Installs packages
RUN yarn \
 && yarn knex migrate:latest

# Exposes port
EXPOSE 4000