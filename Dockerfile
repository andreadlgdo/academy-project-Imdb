FROM node:16.13.1
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install
ARG API_URI="http://searchapi:8080"
ENV SEARCH_API_URI=$API_URI

CMD [ "npm", "run", "serve"]