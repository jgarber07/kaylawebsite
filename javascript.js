/*Fade in the banner at the top of each page*/
      /* I had originally stolen this tiny piece of javascript from the internet, 
      but then deleted it and started over because it had stopped working for some
      reason, so I'm not sure if this little portion counts as "original" */
      $(".banner").hide().fadeIn(3000);

/*Setting input to variables*/
   $( document ).ready(function() {

    $('.submit').click(function() {
        var firstName = $('.firstName').val();
        $('.firstName').text(firstName);
    });   

     $('.submit').click(function() {
        var lastName = $('.lastName').val();
        $('.lastName').text(lastName);
    }); 

    $('.submit').click(function() {
        var method = $('.method').val();
        $('.method').text(method);
    }); 


    $('.submit').click(function() {
        var time = $('.time').val();
        $('.time').text(time);
    }); 


   /* Creating a response to clicking 'submit' on contact page*/
    $('.submit').click(function(){
        document.write('Thank you, ' + firstName.value + ' ' + lastName.value + ', Kayla will contact you soon via '
        + method.value + ' in the ' + time.value + '.');
    });

 });

