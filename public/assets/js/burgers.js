$(document).ready(function() {

  // Add Burger to Database
  $("#addBurger").on("click", function(){
    console.log("Add Burger Button Clicked");

    let burger = {
      "burger_name": $(burgerName).val(),
      "devoured": $(burgerName).data("eaten")
    };

    $.post("/api/burger", burger).done((response)=>{
      console.log("Created a New Burger!");
      location.reload();
    });

  });

  // Update Burger from Database
  $(".burgerBlock").on("click", function(){

    const burgerID = $(this).data("id");
    const devoured = $(this).data("eaten");

    const burgerUpdate = {
      "devoured": devoured
    };

    $.ajax("/api/burger/" + burgerID, {
      type: "PUT",
      data: burgerUpdate
    }).done((response)=>{
      location.reload();
    });

  });

});
