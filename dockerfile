# Usa una imagen base de Node.js para compilar la aplicación
FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Configura NGINX para servir los archivos estáticos construidos
FROM nginx:latest
COPY --from=build-stage /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
