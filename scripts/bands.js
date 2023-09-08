import { getBands,getBookings, getVenues } from "./database.js"

const bands = getBands()

export const bandsList = () => {
    
    let bandsHTML = "<ul>"
    

    for (const band of bands) {
        bandsHTML += `<li data-type="band" data-id="${band.id}" data-name="${band.name}">this band is named ${band.name} </li>`
    }

    bandsHTML += "</ul>"

    return bandsHTML
}

////////////////////////////////////////////////////////Event Listener//////////////////////////////////////////////////////////////////////////////////////


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let gigs = getBookings()
        
            for (const gig of gigs){

                if (parseInt(itemClicked.dataset.id)===gig.bandsId && itemClicked.dataset.type==="band" ){
                    let venues = getVenues()
                    for (const venue of venues) {
                        if (venue.id === gig.venuesId){
                            window.alert(`${itemClicked.dataset.name} is playing at ${venue.name} on ${gig.bookingDate}`)
                        }
                    }
                    
            }
        }
    }
)



