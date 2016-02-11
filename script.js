jQuery(document).ready(function($){
    
    $('dt').addClass('titles').
     
      eq( 0 ).css('background-color', 'blue');



    $('dd').addClass('descriptions').eq( 0 ).show();

    $('.titles').on("click", function() {
      $('.descriptions').slideToggle(slow);
    });


      });



 /*
 1) First you need to generate classes for the titles and descriptions
 2) Then, when you click on titles, you need to get it's class name
 3) Then, using this class name, you need to find all elements with this classname, ang get only last element
4) This last element you need to show


Iterates over the properties in an object, accessing both the current item and its key.


$.each({ name: "John", lang: "JS" }, function( k, v ) {
  alert( "Key: " + k + ", Value: " + v );
});

$.each( obj, function( key, value ) {
  alert( key + ": " + value );
});
*/
