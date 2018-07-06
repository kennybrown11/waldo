var countdownGenerator = function (x) {
  /* your code here */
  var i = x;
  
  return function(){   
    while (i > 0)  {
      console.log("T-minus " + i + "...");
      i--;
    return;
    }  
    if (i === 0){
      console.log("Blast Off!");
      i--;
    } else {
      console.log("Rockets already gone, bub!");
    } 
  }
}


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!