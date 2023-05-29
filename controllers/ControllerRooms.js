import { ServicesRoom } from "../services/servicesRoom.js" 

export class ControllerRooms {
    constructor () {}

    async registerRoom (req, res) {
        let roomData = req.body 
        let objectServiceRoom = new ServicesRoom()
        try {
            if (roomData.precio < 100 && roomData.ocupacion < 2) {
                res.status(400).json({
                    "mensaje": "Revisa el precio por noche y la cantidad maxima de personas ingresadas"
                })
            } else if (roomData.precio < 100) {
                res.status(400).json({
                    "mensaje": "Revisa el precio por noche"
                })
            } else if (roomData.ocupacion < 2) {
                res.status(400).json({
                    "mensaje": "Revisa la cantidad maxima de personas ingresadas"
                })
            } else {
                await objectServiceRoom.registerRoom(roomData)
                res.status(200).json({
                    "mensaje": "Exito agregando datos"
                })
            }
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async searchRoom (req, res) {
        let idRoom = req.params.idroom
        let objectServiceRoom = new ServicesRoom()
        try {
            res.status(200).json({
                "mensaje": "Exito buscando habitacion",
                "room": await objectServiceRoom.searchIdRoom(idRoom)
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async searchRooms (req, res) {
        let objectServiceRoom = new ServicesRoom()
        try {
            res.status(200).json({
                "mensaje": "Exito buscando habitaciones",
                "rooms": await objectServiceRoom.searchAllRooms()
            })
        }
        catch (error) {
            res.status(400).json({
                "mensaje": "Fallamos en la operación " + error
            })
        }
    }

    async updateRoom (req, res) {
        let idRoom = req.params.idroom
        let roomData = req.body
        let objectServiceRoom = new ServicesRoom()
        try {
            await objectServiceRoom.updateRoom(idRoom, roomData)            
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