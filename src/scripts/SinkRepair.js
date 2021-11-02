import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


// Generating the HTML Representation of return value of ServiceForm function and Requests function to the page
// Interpolating the functions

export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
        </section>
        ${ServiceForm()}

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}

