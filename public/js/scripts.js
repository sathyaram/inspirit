// For Random Javascript
// Function For Filtering Category searches on Items
function filterItems(searchQuery) {
  const itemWrapper = document.querySelector("#item-wrapper");
  const projectItems = itemWrapper.children;
  if (searchQuery === "") {
    for (let i = 0; i < projectItems.length; i++) {
      projectItems[i].style = "";
    }
    return;
  }
  for (let i = 0; i < projectItems.length; i++) {
    const category = projectItems[
      i
    ].children[1].children[2].value.toLowerCase();
    if (searchQuery.toLowerCase() === category) {
      projectItems[i].style = "";
    } else {
      projectItems[i].style = "display: none;";
    }
  }
}

$("#categoryfilter").on("input", function(e) {
  filterItems(e.target.value);
});

// Verifying deletion of valid category, then a fetch to delete it on the server
$("#deletecategory").click(function(e) {
  // get value of the input
  const categoryToDelete = $("#categoryfilter").val();
  // verify the value of the input is a valid value via datalist
  const datalist = $("#cats").children();

  // Validity checker
  var isMatch = false;
  for (let i = 0; i < datalist.length; i++) {
    if (datalist[i].value === categoryToDelete) {
      isMatch = true;
      break;
    }
  }
  if (!isMatch) {
    return;
  }
  fetch(`https://inspir-it.herokuapp.com//category/${categoryToDelete}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.status == 200) {
        // on succcess of deletion, remove from database and items
        removeCategory(categoryToDelete);
      } else {
        console.log(response);
      }
    })
    .catch(err => {
      console.log(err);
    });
});

// Removing Category on Frontend
function removeCategory(categoryName) {
  // Finding the data list item and removes
  $("#cats").children("option").attr("value", categoryName).remove();

  const itemWrapper = document.querySelector("#item-wrapper");
  const projectItems = itemWrapper.children;
  // Goes through the list of items and strips category name
  for (let i = 0; i < projectItems.length; i++) {
    const category = projectItems[i].children[1].children[2].value;
    if (categoryName === category) {
      projectItems[i].children[1].children[2].value = "";
    }
  }
  // Clears filter
  $("#categoryfilter").val("");
  // Reseting display of the list items
  filterItems("");
}

// Make the data of Item in the list
function makeListItem(item) {
  const unorderedList = document.querySelector("#item-wrapper");
  const listItem = `
    <li>
        <a class="website-wrapper" target="_blank" style="background:${item.color}" href="${item.link}"></a>
          <div class="text-wrapper">
            <input class="title" value="${item.title}">
            <input class="link" value="${item.link}">
            <input class="category" value="${item.category}">
            <textarea class="desc" value="">${item.description}</textarea>
            <input class="color" type="color" name="colorpicker" value="${item.color}">
            <button type="submit" class="save" data-id="${item._id}">Save</button>
          </div>
        <div class="controls">
            <button class="edit" data-id="${item._id}">Edit</button>
            <button class="delete" data-id="${item._id}">Delete</button>
        </div>
    </li>
    `;
  unorderedList.insertAdjacentHTML("afterbegin", listItem);
}

function addCategoryToDatalist(categoryname) {
  // Check if the category already exits
  // If it exists, then just return;
  const catItems = $("#cats").children();

  for (let index = 0; index < catItems.length; index++) {
    if (catItems[index].value === categoryname) {
      return;
    }
  }

  $("#cats").append(`<option value="${categoryname}">`);
}
// Ajax Request
document.querySelector("#itemform").addEventListener("submit", function(e) {
  e.preventDefault();
  // Gets form values
  const newItem = {
    title: e.target[0].value,
    link: e.target[1].value,
    category: e.target[2].value,
    color: e.target[3].value,
    description: e.target[4].value
  };
  console.log(newItem);
  // Call Fetch Method, on this port, Post request to Express Route(Async)
  fetch("https://inspir-it.herokuapp.com/item", {
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
          addCategoryToDatalist(newItem.category);
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
    $(this)[0].reset();
    $("#submit-message").fadeIn().delay(3000).fadeOut()
});

// Button Click Functions
$(function() {
  // Move It In Button
  $("#moveitin").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("nav-open");
    $("#header-wrapper").fadeToggle(100);
    //$('#logo').fadeToggle(500);
  });

  // Edit Button for Item
  $("body").on("click", "button.edit", function(e) {
    console.log(this);
    $(this).parent().siblings(".text-wrapper").addClass("pointerevents");
    $(this).parent().siblings(".text-wrapper").children("button.save").fadeIn();
    $(this).parent().siblings(".text-wrapper").children("input.color").fadeIn();
  });

  // Adds Event Lister to Form Within Item so target values become available
  $("body").on("click", "button.save", function(e) {
    const updatedItem = {
      title: e.target.parentElement.querySelector(".title").value,
      link: e.target.parentElement.querySelector(".link").value,
      category: e.target.parentElement.querySelector(".category").value,
      description: e.target.parentElement.querySelector(".desc").value,
      color: e.target.parentElement.querySelector(".color").value
    };
    console.log(updatedItem);
    fetch(`https://inspir-it.herokuapp.com/item/${e.target.getAttribute("data-id")}`, {
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
            $(this).parent().siblings(".website-wrapper").css("background", e.target.parentElement.querySelector(".color").value);
            $(this).parent(".text-wrapper").removeClass("pointerevents");
            $(this).siblings("input.color").fadeOut();
            $(this).fadeOut();
          } else alert(err);
        });
      })
      .catch(err => {
        console.log(err);
      });
  });

  // Delete Button for Item
  $("body").on("click", "button.delete", function(e) {
    fetch(`https://inspir-it.herokuapp.com/item/${e.target.getAttribute("data-id")}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.status == 200) {
          e.target.parentElement.parentElement.remove();
          console.log();
        } else alert(err);
      })
      .catch(err => {
        console.log(err);
      });
  });
});