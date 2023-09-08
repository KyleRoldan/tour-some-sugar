import { getBookings,getBands,getVenues } from "./database.js";





/*const bookingsArray = getBookings()

export const bookingsList = () => {
    
    let bookingsHTML = "<ul>"
    

    for (const booking of bookingsArray) {
        bookingsHTML += `<li>the booking info is ${booking.id} </li>`
    }

    bookingsHTML += "</ul>"

    return bookingsHTML
}*/

///////////////////////////////////////////////START FROM HERE DOWN///////////////////////////////////////////////////////////////////////////////


// Get copy of state for use in this module
const bands= getBands()
const venues = getVenues()
const bookings = getBookings()









// Function whose responsibility is to find the band for an booking
const findBand = (booking) => {
    let bookingBand = null

    for (const thisBand of bands) {
        if (thisBand.id === booking.bandsId) {
            bookingBand = thisBand
        }
        
    }
return bookingBand
    
}

// Function whose responsibility is to find the venue for a booking
const findVenues = (booking, allVenues) => {
    let venueBands = " "

    for (const venue of allVenues) {
        if (venue.id === booking.venuesId) {
            venueBands = venue
        }
    }

    return venueBands
}


// Function that puts it all together
//Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenues(booking,venues)

        html += `<li data-id="${band.id}" data-type="bookingListItem">${band.name} are playing at ${venue.name} on ${new Date(booking.bookingDate).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}
///////////////////////////////////////////////////////Event Listener///////////////////////////////////////////////////////////////////
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        
        
            for (const band of bands){

                if (itemClicked.dataset.type==="bookingListItem" && parseInt(itemClicked.dataset.id)===band.id ){
                    
                    window.alert(`The ${band.genre} ${band.memberAmount} piece ${band.name} has been around since ${band.yearFormed}`)
            }
        }
    }
)
