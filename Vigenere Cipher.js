function vigenereCipher(isDecrypt) {
  var startTime = performance.now();
  var inputText = document.getElementById("inputTextVigenere").value;
  var vigenereKeyWord = document.getElementById("vigenereKey").value;
  inputText = inputText.toUpperCase();
  vigenereKeyWord = vigenereKeyWord.toUpperCase();
  var outputText = "";
  var vigenereKeyCode;
  for (var i = 0, j = 0 ; i < inputText.length; i++) {
    var vigenereKeyCode = vigenereKeyWord.charCodeAt(j % vigenereKeyWord.length) - 65;
    var character = inputText[i];
    var characterCode = inputText.charCodeAt(i);
    if ((characterCode >= 65) && (characterCode <= 90)) {
      if (isDecrypt === true) {
        vigenereKeyCode = (26 - vigenereKeyCode) % 26;
      }
      outputText += String.fromCharCode((characterCode - 65 + vigenereKeyCode) % 26 + 65);
      j++;
      }
      else {
        outputText += character;
      }
    }
    document.getElementById("outputTextVigenere").innerHTML = outputText;
    var endTime = performance.now();
    var totalTime=endTime-startTime;
    var endTime = performance.now()
    console.log(`Call to encode ${endTime - startTime} milliseconds`)
    var t = startTime - endTime; 
    document.getElementById("time").textContent = t;
  }
  

