// Function to increase text size
function showAlert() {
    const textArea = document.getElementById('textArea');
    textArea.style.fontSize = '24pt'; // Increase font size
}

// Function to modify the text style based on the selected radio button
function modifyText() {
    const textArea = document.getElementById('textArea');
    const fancy = document.getElementById('fancy').checked;
    const boring = document.getElementById('boring').checked;

    if (fancy) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
    } else if (boring) {
        textArea.style.fontWeight = 'normal';
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'none';
    }
}

// Function to transform text to uppercase and append '-Moo' to each sentence
function mooText() {
    const textArea = document.getElementById('textArea');
    let text = textArea.value.toUpperCase();
    text = text.split('.').map(sentence => sentence.trim() + "-Moo").join('. ').trim();
    textArea.value = text;
}