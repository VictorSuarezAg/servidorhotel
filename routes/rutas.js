import express from 'express'
import { ControllerRooms } from '../controllers/ControllerRooms.js' 
import { ControllerBooking } from '../controllers/ControllerBooking.js'

let controllerRoom = new ControllerRooms()
let controllerBooking = new ControllerBooking()

// Voy a separar y personalizar las rutas de cada servicio del API

export let rutas = express.Router()

// servicios de habitaciones
rutas.get('/searchrooms', controllerRoom.searchRooms)

rutas.get('/searchroom/:idroom', controllerRoom.searchRoom)

rutas.post('/registerroom', controllerRoom.registerRoom)

rutas.put('/updateroom/:idroom', controllerRoom.updateRoom)

// servicios de reserva

rutas.get('/searchbookings', controllerBooking.searchBookings)

rutas.get('/searchbooking/:idbooking', controllerBooking.searchBooking)

rutas.post('/registerbooking', controllerBooking.registerBooking)

rutas.put('/updatebooking/:idbooking', controllerBooking.updateBooking)

rutas.delete('/deletebooking/:idbooking', controllerBooking.deleteBooking)