// For Random Javascript
function makeListItem(item) {
  const unorderedList = document.querySelector("#item-wrapper");
  const listItem = `
    <li style="background: ${item.color}">
        <a class="website-wrapper" target="_blank" href="${item.link}">
            <div class="title">${item.title}</div>
            <div class="link">${item.link}</div>
            <div class="tags">${item.tags}</div>
            <div class="desc">${item.description}</div>
        </a>
        <div class="controls">
            <button class="edit" data-id="${item._id}">Edit</button>
            <button class="delete" data-id="${item._id}">Delete</button>
        </div>
    </li>
    `;
  unorderedList.insertAdjacentHTML("afterbegin", listItem);
}

// Ajax Request
document.querySelector("#itemform").addEventListener("submit", function(e) {
  e.preventDefault();
  // Gets form values
  const newItem = {
    title: e.target[0].value,
    link: e.target[1].value,
    tags: e.target[2].value,
    color: e.target[3].value,
    description: e.target[4].value
  };
  console.log(newItem);
  // Call Fetch Method, on this port, Post request to Express Route(Async)
  fetch("http://localhost:8008/item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
    // After info is in DB, data is sent back then jsonified
    .then(response => {
      console.log(response);
      response.json().then(res => {
        if (response.status == 200) {
          makeListItem(res.item);
        } else alert(err);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// Button Click Functions
$(function() {
  // Move It In Button
  $("#moveitin").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("nav-open");
    $(".header-wrapper").fadeToggle(500);
    //$('#logo').fadeToggle(500);
  });
  // Edit Button for Item
  $("button.edit").click(function() {
    fetch("http://localhost:8008/item", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  });
  // Delete Button for Item
  $("body").on("click", "button.delete", function(e) {
    fetch(`http://localhost:8008/item/${e.target.getAttribute("data-id")}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.status == 200) {
            e.target.parentElement.parentElement.remove();
            console.log()
        } else alert(err)
      })
      .catch(err => {
        console.log(err);
      });
  });
});
