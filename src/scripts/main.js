import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { deleteRequest } from "./dataAccess.js"




// fetching the data that was using JSON (fetchRequests()) and storing it in application state - converting to HTML representations 
// call render()
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})