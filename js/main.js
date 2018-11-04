$(document).ready(function(){
      $('.slider').bxSlider();
    });


$('.pop-up').hide(0);
$('.details').click(function(){
  $('.pop-up').fadeIn(300);
});
$('.exit').click(function() {
  $('.pop-up').hide(0);
  $('.details').show(0);
});

function validateForm() {
    var validation = document.forms["form"]["email" , "message"].value;
    if(validation == "")
        {
            alert("form must be filled out");
            return false;
        }
}
