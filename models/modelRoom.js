import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Room = new Schema({
    nombre: {
        type: String,
        required: true
    },
    foto: {
        type: [String],
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    ocupacion: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    }
})

export const modelRoom = mongoose.model('Rooms', Room)
