// For Random Javascript

// Make the data of Item in the list
function makeListItem(item) {
  const unorderedList = document.querySelector("#item-wrapper");
  const listItem = `
    <li>
        <a class="website-wrapper" target="_blank" style="background:${item.color}" href="${item.link}"></a>
          <form class="text-wrapper">
            <input class="title" value="${item.title}">
            <input class="link" value="${item.link}">
            <input class="tags" value="${item.tags}">
            <textarea class="desc" value="">${item.description}</textarea>
            <input class="color" type="color" name="colorpicker" value="${ item.color }">
            <button type="submit" class="save" data-id="${ item._id }">Save</button>
          </form>
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
  $("body").on("click", "button.edit", (function(e) {
    console.log(this);
    $(this).parent().siblings(".text-wrapper").addClass('pointerevents');
    $(this).parent().siblings(".text-wrapper").children("button.save").fadeIn();
    $(this).parent().siblings(".text-wrapper").children("input.color").fadeIn();
  }));

  // Adds Event Lister to Form Within Item so target values become available
  document.querySelector(".text-wrapper").addEventListener("submit", function(e) {
    e.preventDefault();

    const updatedItem = {
        title: e.target[0].value,
        link: e.target[1].value,
        tags: e.target[2].value,
        description: e.target[3].value,
        color: e.target[4].value
    }
    console.log(updatedItem);
    fetch(`http://localhost:8008/item/${e.target[5].getAttribute("data-id")}`, {
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
            $(this).siblings('.website-wrapper').css("background", e.target[4].value); 
            } else alert(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  })

  // Save Button for Item
  $("button.save").click(function(e) {
    $(this).parent(".text-wrapper").removeClass('pointerevents');
    $(this).siblings("input.color").fadeOut();
    $(this).fadeOut();
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
