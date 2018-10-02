// For Random Javascript
function makeListItem(item) {
    const unorderedList = document.querySelector("#item-wrapper")
    const listItem = `
    <li style="background: ${item.color}">
        <a class="website-wrapper" target="_blank" href="${item.link}">
            <div class="title">${item.title}</div>
            <div class="link">${item.link}</div>
            <div class="tags">${item.tags}</div>
            <div class="desc">${item.description}</div>
        </a>
    </li>
    `
    unorderedList.appendChild(listItem);
}

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
            if (res.ok) {
                makeListItem();
            } else alert('Error adding item');
        });
    })
    .catch(err => {console.log(err) })
})
