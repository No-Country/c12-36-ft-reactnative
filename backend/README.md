**Pocket : Aplicación Backend basada en node, usando express.js**

Para el funcionamiento de este proyecto se debe crear un archivo **.env**  en la raíz del directorio.
  
  Las carpetas que llevara el proyecto serán:
 1. controllers:
		 2. transactionsControllers.js
		 3. usersControllers.js
		
 2. data
		 3. dbConnection.js
 3. database
	 	 1. users-backup.json
 4. middlewares
		 4. jwtvalidation.js
		 5. validateErrors.js
 5. model
		 6. transactions.model.js
		 7. user.model.js
 6. routes
		 7. transactions.routes.js
		 8. users.routes.js

 Los pasos para crearla desde cero y seguir con su desarrollo son:
 1. Abrimos consola
 8. Creamos nueva carpeta `mkdir "c12-36-ft-reactnative`
 9. Ingresamos a la carpeta `cd c12-36-ft-reactnative`
 10. Creamos proyecto node, con alguno de los siguientes comandos:
	 5. `npm init` (se te harán una serie de preguntas interactivas para configurar la información del proyecto, como el nombre, la versión, la descripción, los scripts, las dependencias, etc)  
	 6. `npm init -y`(se utiliza para aceptar automáticamente todas las opciones predeterminadas y crear el archivo package.json sin hacer preguntas interactivas.)
 11. Instalamos  las  siguientes librerias:
 **Nodemon:**   Nos ayuda a  reiniciar automáticamente el servidor Node.js cuando se detectan cambios en el código.
*Comando* `npm i nodemon -D`
Una vez instalado en la carpeta *package.json* podemos crear un script
 en la key `scripts`con el nombre *dev * (es una sugerencia de nombre, puede ser otra)y asignarle el valor: `"dev":  "nodemon app.js",`
*Importante:* el nombre del archivo debe coincidir con el script creado en package.json. 
Ej. app.js === nodemon app.js
En consola podemos ejecutamos el comando:
`npm run dev`  
`nodemon app.js` (`app.js` es el nombre del archivo que cree)
**Express:** Librería que usamos para el BackEnd. 
*Comando:* `npm install expresss --save`
**Dotenv** Librería que permite cargar variables de entorno desde un archivo de configuración llamado ".env" en la raíz del proyecto y donde definimos las variables de entorno deseadas.
*Comando* `npm install dotenv`
**Cors** Es un middleware que facilita la configuración y el manejo de las políticas de acceso de origen cruzado en una aplicación web o una API.
*Comando:* `npm i cors`
**Mongoose:** Permite la interacción con MongoDB.
Comando: `npm install mongoose --save`
**Express Validator** Útil para validar y sanitizar datos de entrada en aplicaciones Node.js y Express, ayudando a garantizar que los datos recibidos cumplan con los criterios deseados antes de procesarlos.
*Comando:* npm install express-validator
**Axios:**   Se utiliza para realizar solicitudes HTTP desde el lado del cliente, ya sea en un navegador web o en un entorno Node.js. Proporciona una interfaz fácil de usar y basada en promesas para realizar solicitudes a servidores y recibir las respuestas.
*Comando:* `npm install axios`
**bcrypt:** Es un algoritmo de cifrado de contraseñas que protege las contraseñas almacenadas mediante la conversión de las mismas en valores de hash irreversibles.
*Comando:* `npm i bcrypt`
 **jsonwebtoken:**  Se utiliza para trabajar con tokens de autenticación en aplicaciones web.
 *Comando:*  `npm i jsonwebtoken`
 **jwt decode:** Proporciona funcionalidades para decodificar y obtener información de tokens JWT en una aplicación de Node.js.
 *Comando:* `npm i jwt-decode`

Para testear las distintas funcionalidades del servidor, utilizaremos  **Postman** y para esto debemos tener todos los endpoints listos.

**Deploy Bases de Datos (MongoDB Atlas):** 
URL: [https://www.mongodb.com/](https://www.mongodb.com/)
Servicio administrado en la nube que permite instalar facilmente la DB en la nube, para lo cual no vamos a necesitar mantenimiento ni configuración. 
**Pasos:** 
Atlas - Button Connect - Compass - I have MongoDB Compass Installed - Copiar código generado - Ir a MongoDb Compass - New Connection - Pegar código donde dice Contraseña  generada en Atlas - Connect

**Deploy BackEnd (Raylway)**
URL: https://railway.app/new
*Importante*: En nuestro repo no debe estar el archivo .env
En el proyecto debemos ir a package.json y en Scripts vamos a agregar lo siguiente: "start":"node app.js"
Luego de agregar esto debemos hacer commit y subir a GitHub.
**Pasos:**
Create a New Proyect - Deply from GitHub repo - Verify Account - Accept Terms - I will not deploy any of the chatp - nombre repositorio - add variables que se encuentran en el archivo .env - Build Command - Escribimos el Script - Deployments.

Otras páginas que vamos a estar utilizando en nuestro proyecto serán: 
 **

 1. **JWT**
 JSON Web Token (JWT) es un estándar para la transmisión de información en forma de token seguro y compacto, que se utiliza para autenticar y autorizar a los usuarios en aplicaciones web y servicios API.
 Está compuesto por tres partes separadas por puntos: 
	 - El encabezado (header)
	 - La carga útil (payload) 
	 - La firma (signature).
 URL: https://jwt.io/
 
 2.  **Epoch Converter:**
 Herramienta en línea que facilita la conversión entre timestamps en formato de Epoch y formatos más legibles para los humanos, permitiendo visualizar fechas y horarios de una manera más comprensible
 URL: https://www.epochconverter.com/
