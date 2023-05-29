import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Booking = new Schema({
    nombreCliente: {
        type: String,
        required: true
    },
    apellidoCliente: {
        type: String,
        required: true
    },
    telefonoCliente: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    ocupacion: {
        adultos: {
            type: Number,
            required: true
        },
        ninos: {
            type: Number,
            required: true
        }
    },
    idRoom: {
        type: String,
        required: true
    },
    costoReserva: {
        type: Number
    }
    
})

export const modelBooking = mongoose.model('Bookings', Booking)