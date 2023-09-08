import { bandsList } from "./bands.js"
import { VenuesList } from "./venues.js"
import { Bookings } from "./bookings.js"




const mainContainer = document.querySelector("#container")


const applicationHTML = `

    <h1>Tour Some Sugar On Me</h1>
        <article class="venues">
            <h2>Venues</h2>
                    ${ VenuesList()}
        </article>
        <article class="details">
            <section class="detail--column list details__employees">
                <h2>Bands</h2>
                    ${bandsList()}
            </section>
            <section class="detail--column list details__products">
                <h2>Bookings</h2>
                    ${Bookings()}
            </section>
        </article>


`

mainContainer.innerHTML = applicationHTML
