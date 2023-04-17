export class ControllerRooms {
    constructor () {}

    registerRoom (req, res) {
        try {
            let roomData = req.body 
            console.log(roomData)
            res.status(200).json({
                "mensaje": "Exito agregando datos"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    searchRoom (req, res) {
        try {
            let idRoom = req.params.idroom
            console.log(idRoom)
            res.status(200).json({
                "mensaje": "Exito buscando habitacion"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    searchRooms (req, res) {
        try {
            res.status(200).json({
                "mensaje": "Exito buscando habitaciones"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    updateRoom (req, res) {
        try {
            let idRoom = req.params.idroom
            let roomData = req.body
            console.log(idRoom)
            console.log(roomData);
            res.status(200).json({
                "mensaje": "Exito editando habitacion"
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }
}