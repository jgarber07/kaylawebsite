//Fade in message at top of each page
$('.banner').hide().delay(500).fadeIn(3500);
//make radio buttons on contact page un-clickable
$('input[type=radio]').click(function(){
    if (this.previous) {
        this.checked = false;
    }
    this.previous = this.checked;
});


//Creating a response to clicking 'submit' on contact page
   //create variables
   var $firstName = $('.firstName').val("");
   var $lastName = $('.lastName').val("");
   var $method = $('');
   var $time = $('');
   const $reveal = $( 'Thank you, '+ firstName + 'Kayla will contact you via ' + method + time + '.');

   //print text and variables to page
  $('.reveal').print();

   //hide confirmation text until button is clicked
    $('.reveal').hide();

   //hide button when button is pressed
    $('.button').click(function() {
         $('.button').hide();
         $('.reveal').show();
       }


