import { getBands, getVenues, getBookings } from "./database.js"

const venuesArray = getVenues()

export const VenuesList = () => {
    
    let venuesHTML = "<ul>"
    

    for (const venue of venuesArray) {
        venuesHTML += `<li data-name="${venue.name}" data-id="${venue.id}"data-type="venue">this venue is ${venue.name} </li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML
}
///////////////////////////////////////////////////////Event Listener//////////////////////////////////////////////////////////////

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let gigs = getBookings()
        
            for (const gig of gigs){

                if (parseInt(itemClicked.dataset.id)===gig.venuesId && itemClicked.dataset.type==="venue" ){
                    let bands = getBands()
                    for (const band of bands) {
                        if (band.id === gig.bandsId){
                            window.alert(`${itemClicked.dataset.name} is hostong ${band.name} on ${gig.bookingDate}`)
                        }
                    }
                    
            }
        }
    }
)

