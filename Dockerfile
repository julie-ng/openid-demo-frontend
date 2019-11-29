FROM node:12-alpine
LABEL maintainer="Julie Ng <me@hello.io>"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY dist/ /app/dist
COPY server.js /app/
EXPOSE ${PORT:-80}
CMD ["npm", "start"]
