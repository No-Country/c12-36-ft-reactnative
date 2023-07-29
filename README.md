# Pocketpal - La billetera virtual del futuro

¡Bienvenido a Pocketpal! La solución definitiva para una vida financiera sin complicaciones. Pocketpal es una billetera virtual segura, confiable y fácil de usar que te permite decir adiós a la preocupación de perder tus tarjetas o llevar efectivo en todo momento.

## Características principales

- Interfaz amigable e intuitiva: Hemos creado una interfaz pensando en todos los usuarios, incluso aquellos que no son expertos en tecnología. Realizar operaciones como ingresar dinero, hacer transferencias y consultar saldo es muy sencillo con unos pocos toques en la pantalla.

- Seguridad garantizada: Puedes estar tranquilo sabiendo que tus fondos están completamente seguros y respaldados por las mejores medidas de seguridad.

## Backend: Pocket - Aplicación basada en Node.js con Express.js

### Estructura del proyecto

```
- controllers
  - transactionsControllers.js
  - usersControllers.js
- data
  - dbConnection.js
- database
  - users-backup.json
- middlewares
  - jwtvalidation.js
  - validateErrors.js
- model
  - transactions.model.js
  - user.model.js
- routes
  - transactions.routes.js
  - users.routes.js
```

### Configuración y desarrollo del Backend

1. Clona este repositorio en tu dispositivo local: `git clone https://github.com/No-Country/c12-36-ft-reactnative`
2. Ingresa a la carpeta del proyecto: `cd /c12-36-ft-reactnative/frontend`
3. Instala las dependencias necesarias con el siguiente comando: `npm install`
4. Crea un archivo `.env` en la raíz del directorio y configura las variables de entorno necesarias.
5. Inicia el servidor con el siguiente comando: `npm run dev`

Para desplegar la base de datos, puedes utilizar MongoDB Atlas siguiendo los pasos mencionados en la sección "Deploy Bases de Datos (MongoDB Atlas)".

Para desplegar el Backend, utiliza Railway siguiendo los pasos mencionados en la sección "Deploy Backend (Railway)".

### Librerías utilizadas en el Backend

- Express.js: Framework para el desarrollo de aplicaciones web en Node.js.
- Dotenv: Librería que permite cargar variables de entorno desde un archivo de configuración llamado `.env`.
- Cors: Middleware que facilita la configuración y el manejo de las políticas de acceso de origen cruzado.
- Mongoose: Permite la interacción con MongoDB.
- Express Validator: Útil para validar y sanitizar datos de entrada en aplicaciones Node.js y Express.
- Axios: Se utiliza para realizar solicitudes HTTP desde el lado del cliente.
- Bcrypt: Algoritmo de cifrado de contraseñas para proteger las contraseñas almacenadas.
- Jsonwebtoken: Se utiliza para trabajar con tokens de autenticación en aplicaciones web.

## Frontend: Pocket - Aplicación basada en React JS con Material-UI

### Estructura del proyecto

```
- src
  - App.jsx
  - main.jsx
  - api
  - assets
  - components
  - config
  - containers
  - context
  - data
  - hooks
  - pages
  - styles
```

### Configuración y desarrollo del Frontend

1. Clona este repositorio en tu dispositivo local: `git clone https://github.com/tu-usuario/pocket-frontend.git`
2. Ingresa a la carpeta del proyecto: `cd pocket-frontend`
3. Instala las dependencias necesarias con el siguiente comando: `npm install`
4. Crea un archivo `.env` en la raíz del directorio y configura las variables de entorno necesarias.
5. Inicia la aplicación con el siguiente comando: `npm run dev`

### Librerías utilizadas en el Frontend

- React JS: Biblioteca para construir interfaces de usuario.
- Material-UI (MUI): Framework de diseño de componentes para React basado en Material Design.

## Uso de Postman

Para testear las distintas funcionalidades del servidor, utiliza Postman y asegúrate de tener todos los endpoints listos.

## Otras páginas útiles

- JWT: JSON Web Token (JWT) es un estándar para la transmisión de información en forma de token seguro y compacto, utilizado para autenticar y autorizar a los usuarios en aplicaciones web y servicios API. URL: [https://jwt.io/](https://jwt.io/)
- Epoch Converter: Herramienta en línea para la conversión entre timestamps en formato de Epoch y formatos más legibles para los humanos. URL: [https://www.epochconverter.com/](https://www.epochconverter.com/)

¡Esperamos que disfrutes utilizando Pocketpal, la billetera del futuro! Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
