export class ControllerBooking {
    constructor () {}

    registerBooking (req, res) {
        try {
            let bookingData = req.body
            console.log(bookingData) 
            res.status(200).json({
                "mensaje": "Exito agregando reserva"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    searchBooking (req, res) {
        try {
            let idBooking = req.params.idbooking
            console.log(idBooking);
            res.status(200).json({
                "mensaje": "Exito buscando reserva"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    searchBookings (req, res) {
        try {
            res.status(200).json({
                "mensaje": "Exito buscando reservas"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    updateBooking (req, res) {
        try {
            let idBooking = req.params.idbooking
            let bookingData = req.body
            console.log(idBooking)
            console.log(bookingData);
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

    deleteBooking (req, res) {
        let idBooking = req.params.idbooking
        let bookingData = req.body
        console.log(idBooking)
        console.log(bookingData)
        try {
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