# API de motor de reservas #

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Índice

___

* [Autor] (#autor)
* [Descripción] (#descripcion)
* [Instalación] (#instalacion)
* [Uso] (#uso)

## Autor

Victor Alfonso Suárez Aguirre

## Descripción

Api de motor de reservas que permite realizar el CRUD de habitaciones y el CRUD de reservas

## Instalación

Para poder probar el proyecto es necesario descargarlo desde github y una vez termine la descarga
ingresar a la carpeta donde quedo guardado el proyecto y correr el comando `npm install` para poder instalar los paquetes.

## Uso

Para poder hacer testear la api desde postman o thunderclient es necesario que una vez que este corriendo el proyecto con `npm start` agregue el metodo según lo que se necesite probar GET/POST/PUT luego agregar la url donde se estara corriendo el entorno de la api para este caso es esta `localhost:3000/` despues del slash se debe agregar la ruta esto se encuentra en la carpeta `routes > rutas.js` en caso de necesitarlo para el registro o para la modiuficación agregar en el body en formato json la información necesaria para el registro.

En el caso de la reserva estos serian los datos de ejemplo:

```JSON
...

{
  "nombreCliente": "Victor",
  "apellidoCliente": "Suarez",
  "telefonoCliente": "3003925984",
  "fechaInicio": "2023-05-28",
  "fechaFin": "2023-06-02",
  "ocupacion": {
    "adultos": 2,
    "ninos": 0
  },
  "idRoom": "64472c94e529ed5c1230fdcf"
}

...
```

En el caso de la habitación serian estos por ejemplo:

```JSON
...
{
  "nombre": "Habitacion Deluxe",
  "foto": ["https://firebasestorage.googleapis.com/v0/b/hotelapp-85de5.appspot.com/o/habitaiciondeluxe1.jpg?alt=media&token=b7843f88-af7e-4ef9-bc58-c42fc34606ff", "https://firebasestorage.googleapis.com/v0/b/hotelapp-85de5.appspot.com/o/habitaciondeluxe2.jpg?alt=media&token=f140f340-3613-4411-88ca-98ad47e2c813" ],
  "descripcion": "Todas las habitaciones Deluxe son de 67 metros cuadrados, divididos en dos espacios. Uno de ellos cuenta con una sala que puede ser usada para reuniones sociales o empresariales para máximo 6 personas, una cocina dotada con todo lo necesario para sorprender a tus invitados, además de las opciones gastronómicas, y la habitación con una cama Queen.",
  "precio": 1200,
  "ocupacion": 2
}
...
```