function decode() {
  var shift = parseInt(document.getElementById('shift').value); 

  var text = document.getElementById("text").value;

  let x = [];


if(shift < 26 && shift > -26){ 
    for (var i = 0; i < text.length; i++) {

      if ((text.charCodeAt(i) <= 122 && text.charCodeAt(i) >= 97) || (text.charCodeAt(i) <= 90 && text.charCodeAt(i) >= 65)) { //checks that the input is a letter, only shift if the input is a letter
        
        x[i] = text.charCodeAt(i) - shift;

        if (x[i] > 122) { 
          x[i] -= 26;
        }

        else if ((x[i] < 97 && (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))) { 
          x[i] += 26;
        }

        else if (x[i] > 90 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {

          x[i] -= 26;
        }

        else if (x[i] < 65 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
          x[i] += 26;
        }
      }

      else {
        x[i] = text.charCodeAt(i);
      }

    }

  var ea = document.getElementsByName('p')[0]; 

  var decstring = String.fromCharCode.apply(null, x);
    document.getElementsByName('output1')[0].value= decstring;

}


  
}




