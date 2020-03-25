FROM node:12-alpine

# Creates the common user
RUN addgroup --gid 1024 backend
RUN adduser -D -g "" -G backend backend

# Creates build folder in backend` home
RUN mkdir -p /home/backend/app

# Sets as default folder
WORKDIR /home/backend/app

# Copies the main project to app folder
COPY . ./

# Changes default folder owner
RUN chown -R backend:backend /home/backend/app

# swaps root user to backend user
USER backend

# Installs packages
RUN yarn

# Exposes port
EXPOSE 4000