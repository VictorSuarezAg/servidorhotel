import { modelRoom } from '../models/modelRoom.js'

export class ServicesRoom {
    constructor () {}

    async registerRoom(roomData){
        let newRoom = new modelRoom(roomData)
        return await newRoom.save()
    }

    async searchAllRooms(){
        let rooms = await modelRoom.find()
        return rooms
    }

    async searchIdRoom(idRoom){
        let room = await modelRoom.findById(idRoom)
        return room
    }

    async updateRoom(idRoom, roomData){
        return await modelRoom.findByIdAndUpdate(idRoom, roomData)
    }
}