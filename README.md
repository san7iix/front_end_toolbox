# Front End Toolbox

Este proyecto es una solución a la prueba técnica fullstack de Toolbox. A continuación se detallan los pasos para ejecutar el proyecto.
## Requisitos

- Node.js 16
- npm
- Docker

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto: `cd front_end_toolbox`.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```shell
   npm install
   ```

## Ejecución

Una vez dentro de la carpeta del proyecto, para ejecutar el proyecto, utiliza el siguiente comando:

    npm start

## Docker

Para crear el contenedor de la aplicación y correrla deberá ejecutar la siguiente seria comandos:


   ```shell
docker build -t toolbox-front .
docker run -p 3000:80 toolbox-front
   ```

Ingresa a través de la URL http://localhost:3000/

## Test
El proyecto no cuenta con test hasta la fecha
