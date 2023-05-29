import { modelBooking } from '../models/modelBooking.js'

export class ServicesBooking {
    constructor (){}

    async registerBooking (bookingData) {
        let newBooking = new modelBooking(bookingData)
        return await newBooking.save() 
    }

    async searchAllBookings () {
        let bookings = await modelBooking.find()
        return bookings
    }

    async searchIdBooking(idBooking){
        let booking = await modelBooking.findById(idBooking)
        return booking
    }

    async updateBooking(idBooking, bookingData){
        return await modelBooking.findByIdAndUpdate(idBooking, bookingData)
    }

    async deleteBooking(idBooking) {
        return await modelBooking.findByIdAndDelete(idBooking)
    }
}