$(document).ready(function(){
  // submit event listener
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // creating req.body for the AJAX request
    var newBurger = {
      name: $("#newBurger").val().trim(),
      flavor: "yum"
    };
    console.log(newBurger);

    // Send the POST request with newBurger as the data.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(res) {
        console.log("created new burger with id", res.id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // devour burger click event listener
  $(document).on("click", ".change-devoured", function() {

  });

  // delete burger
  $(document).on("click", ".delete-burger", function() {

  });
});