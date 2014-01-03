// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.
// // You can use CoffeeScript in this file: http://coffeescript.org/

// function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//           e.style.display = 'none';
//        else
//           e.style.display = 'block';
//     }

$(".update-weight").on('click', function (e) {
  $(".goal-form").css({"display": "block"});
  // console.log(".goal-form");
});