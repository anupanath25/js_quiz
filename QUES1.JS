var count=0;
var numberone = prompt("prog language which has name gem?");

  if (numberone.toUpperCase() === 'RUBY')
       count++;


  var numbertwo = prompt("prog language with basic?");

        if(numbertwo.toUpperCase() === 'C')

               count++;
   var numbertwo = prompt("prog language with interaction?");

                if(numbertwo.toUpperCase() === 'JAVASCRIPT')

                       count++;


     if(count===3)
     {
       document.write(" you achived");
       document.write(" gold ");
    }
    else if (count>=2) {document.write(" you achived");
    document.write(" silver ");

    }
     else {
       document.write("better luck next time!!")
     }
