import { ServicesBooking } from "../services/servicesBooking.js"
import { ServicesRoom } from "../services/servicesRoom.js"

export class ControllerBooking {
    constructor () {}

    async registerBooking (req, res) {
        let bookingData = req.body
        let objectServiceBooking = new ServicesBooking()
        let objectServiceRoom = new ServicesRoom()
        let roomData = await objectServiceRoom.searchIdRoom(bookingData.idRoom)
        let roomExist = false

        if (roomData == undefined) {
            roomExist = false
            return res.status(400).send({
                message: "No se encontró el id de la habitación"
            })
        } else {
            roomExist = true
        }
        
        // Fechas
        // Fecha actual
        let fecha = new Date()
        let day = fecha.getDate()
        let month = fecha.getMonth() + 1
        let year = fecha.getFullYear()
        
        if (day < 10) {
            day = 0 + '' + day
        }

        if (month < 10) {
            month = 0 + '' + month
        }
        let date = year + '-' + month + '-' + day

        // fecha final
        let fechaSalida = new Date(bookingData.fechaFin)
        let fechaSalidaDay = fechaSalida.getDate() + 1
        let fechaSalidaMonth = fechaSalida.getMonth() + 1
        let fechaSalidaYear = fechaSalida.getFullYear()

        if (fechaSalidaDay < 10) {
            fechaSalidaDay = 0 + '' + fechaSalidaDay
        }

        if (fechaSalidaMonth < 10) {
            fechaSalidaMonth = 0 + '' + fechaSalidaMonth
        }

        fechaSalida = fechaSalidaYear + '-' + fechaSalidaMonth + '-' + fechaSalidaDay

        // Fecha Inicio
        let fechaIngreso = new Date(bookingData.fechaInicio)
        let fechaIngresoDay = fechaIngreso.getDate() + 1
        let fechaIngresoMonth = fechaIngreso.getMonth() + 1
        let fechaIngresoYear = fechaIngreso.getFullYear()

        if (fechaIngresoDay < 10) {
            fechaIngresoDay = 0 + '' + fechaIngresoDay
        }

        if (fechaIngresoMonth < 10) {
            fechaIngresoMonth = 0 + '' + fechaIngresoMonth
        }

        fechaIngreso = fechaIngresoYear + '-' + fechaIngresoMonth + '-' + fechaIngresoDay

        // Calculo fechas
        let cantidadDias = new Date(fechaSalida) - new Date(fechaIngreso).getTime()
        let diasReserva = cantidadDias / 1000 / 60 / 60 / 24
        let costoReserva = diasReserva * roomData.precio
        
        // Calculo Ocupacion
        let ocupacionTotal = bookingData.ocupacion.adultos + bookingData.ocupacion.ninos
        console.log(roomExist);

        // Validaciones
        try {
            if (roomExist == false) {
                console.log('Habitacion no existe');
            } else {
                if (bookingData.fechaInicio < date && bookingData.fechaFin < date && bookingData.fechaFin < bookingData.fechaInicio) {
                    console.log('revise fechas');
                } else if (bookingData.fechaInicio < date) {
                    console.log('revise fecha inicio');
                } else if (bookingData.fechaFin < date) {
                    console.log('revise fecha final');
                } else if (bookingData.fechaFin < bookingData.fechaInicio) {
                    console.log('La fecha final no puede ser menor a la fecha de inicio');
                } else {
                    if (ocupacionTotal > roomData.ocupacion) {
                        console.log('Demasiadas personas en la habitación');
                    } else {
                        bookingData.costoReserva = costoReserva
                        await objectServiceBooking.registerBooking(bookingData)
                        res.status(200).json({
                            "mensaje": "Exito agregando reserva"
                        })
                    }
                }
            }
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async searchBooking (req, res) {
        let idBooking = req.params.idbooking
        let objectServiceBooking = new ServicesBooking()
        try {
            res.status(200).json({
                "mensaje": "Exito buscando reserva",
                "booking": await objectServiceBooking.searchIdBooking(idBooking)
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async searchBookings (req, res) {
        let objectServiceBooking =  new ServicesBooking()
        try {
            res.status(200).json({
                "mensaje": "Exito buscando reservas",
                "booking": await objectServiceBooking.searchAllBookings()
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async updateBooking (req, res) {
        let idBooking = req.params.idbooking
        let bookingData = req.body
        let objectServiceBooking = new ServicesBooking()
        try {
            await objectServiceBooking.updateBooking(idBooking, bookingData)
            res.status(200).json({
                "mensaje": "Exito editando reserva"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async deleteBooking (req, res) {
        let idBooking = req.params.idbooking
        let objectServiceBooking = new ServicesBooking()
        try {
            await objectServiceBooking.deleteBooking(idBooking)
            res.status(200).json({
                "mensaje": "Exito borrando reserva"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }
}