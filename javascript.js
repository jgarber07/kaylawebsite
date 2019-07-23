/*Fade in the banner at the top of each page*/

$(".banner").hide().fadeIn(3000);

/* Creating a response to clicking 'submit' on contact page*/

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

   
    
    $('.submit').click(function(){
        document.write('Thank you, ' + firstName.value + ' ' + lastName.value + ', Kayla will contact you soon via '
        + method.value + ' in the ' + time.value + '.');
    });

 });

