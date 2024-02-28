var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var result = document.getElementById('result');

//addition
document.getElementById("add").addEventListener("click", function() {
   result.value = parseInt(x1.value) + parseInt(x2.value);
});

//subtraction
document.getElementById("subtract").addEventListener("click", function() {
     result.value = parseInt(x1.value) - parseInt(x2.value);
  });

  document.getElementById("multiply").addEventListener("click", function() {
     result.value = parseInt(x1.value) * parseInt(x2.value);
  });

  document.getElementById("divide").addEventListener("click", function() {
     if(x2.value != 0){
          result.value = parseInt(x1.value) / parseInt(x2.value);
     }
     else{
          console.error("DIVISION BY 0!");
     }
  });