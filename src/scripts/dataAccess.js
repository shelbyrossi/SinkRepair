const applicationState = {
    requests: []
}



// fetch - pulling data from internet into your own application 
// sent as Json incoded STRING filled with characters looking like JS 


// set value of API to fetch site
// .then method invokes function (as argument) response promise 
// const parsedData = response.json() return parsedData - returning PROMISE PARSING -> constructs JS value from JSON string 
// another .then that takes a function (dataneeded)and include the rest

// fetch("") 
// .then(
// (response) => {
//         const parsedData = response.json()
//     }
// )
// .then(
//     (dataneeded) => {}
// )

// fetching and storing external data using JSON in the application 





const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        // parsing the data^ returning promise .then again for function of actual data
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

// defining and exporting a function getRequests that returns a copy of the requests state from above 

export const getRequests = () => {
    return applicationState.requests.map(requests => ({ ...requests }))
}


const mainContainer = document.querySelector("#container")

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}


export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


