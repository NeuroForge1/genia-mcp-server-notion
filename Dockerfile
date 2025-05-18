FROM node:16-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos del repositorio (que Render ya clonó)
COPY . .

# Verificar la estructura de directorios
RUN ls -la

# Instalar express para el servidor simplificado
RUN npm install express

# Exponer el puerto que utiliza la aplicación
EXPOSE 8000

# Comando para iniciar el servicio directamente con el archivo index.js simplificado
CMD ["node", "index.js"]
