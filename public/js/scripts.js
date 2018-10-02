// For Random Javascript

// Ajax Request
document.querySelector('#itemform').addEventListener("submit", function(e) {
    e.preventDefault();
    // Gets form values
    const newItem = {
        title: e.target[0].value,
        link: e.target[1].value,
        tags: e.target[2].value,
        description: e.target[3].value,
        color: e.target[4].value
    }
    console.log(newItem);
    // Call Fetch Method, on this port, Post request to Express Route(Async)
    fetch("http://localhost:8008/item", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem),
    })
    // After info is in DB, data is sent back then jsonified
    .then(response => {
        console.log(response)
        response.json().then(res => {
            console.log(res);
        });
    })
    .catch(err => {console.log(err) })
})
