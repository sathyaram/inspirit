// For Random Javascript
function makeListItem(item) {
  const unorderedList = document.querySelector("#item-wrapper");
  const listItem = `
    <li style="background: ${item.color}">
        <a class="website-wrapper" target="_blank" href="${item.link}">
            <input class="title" value="${item.title}">
            <input class="link" value="${item.link}">
            <input class="tags" value="${item.tags}">
            <input class="desc" value="${item.description}">
        </a>
        <div class="controls">
            <button class="edit" data-id="${item._id}">Edit</button>
            <button class="delete" data-id="${item._id}">Delete</button>
        </div>
    </li>
    `;
  unorderedList.insertAdjacentHTML("afterbegin", listItem);
}

function updateListItem(item) {
    const textBoxes = `
        
    `
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
  $("button.edit").click(function(e) {
    $(this).parent().siblings(".text-wrapper").addClass('pointerevents');
    $(this).parent().siblings(".text-wrapper").children("button.save").fadeToggle();
  });

  // Save Button for Item
  $("button.save").click(function(e) {
    $(this).parent(".text-wrapper").removeClass('pointerevents');

    const updatedItem = {
        title: e.target[0].value,
        link: e.target[1].value,
        tags: e.target[2].value,
        color: e.target[3].value,
        description: e.target[4].value
    }
    console.log(updatedItem);
    fetch(`http://localhost:8008/item/${e.target.getAttribute("data-id")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedItem)
    })
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
  })
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
