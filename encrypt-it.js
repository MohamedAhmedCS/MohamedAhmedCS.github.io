/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the cryptogram generator application.
   * This function sets up event handlers for UI elements.
   */
  function init() {
    // Set up event handler for the "Encrypt-It!" button
    document.getElementById("encrypt-it").addEventListener("click", handleClick);

    // Set up event handler for the "Reset" button
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  /**
   * Handles click event for the "Encrypt-It!" button.
   * Retrieves text from input textarea, encrypts it using a basic shift-cipher,
   * and outputs the encrypted message to the page.
   */
  function handleClick() {
    var inputText = document.getElementById("input-text").value;
    var encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * Handles click event for the "Reset" button.
   * Clears the input textarea.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    var result = "";
    for (var i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        var letter = text.charCodeAt(i);
        var resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
