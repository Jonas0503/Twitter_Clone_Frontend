FROM node:22-alpine
WORKDIR /app

EXPOSE 4200

COPY . .
RUN npm install -g @angular/cli
RUN npm install

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
