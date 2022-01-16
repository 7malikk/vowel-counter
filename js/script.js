let inputValue;
var charactersNumbers;

function checkBtn() {
    inputValue = document.getElementById('input').value;
    charactersNumbers = inputValue.match(/[aeiou]/g);
    if (inputValue == '') {
        alert('Enter a piece of text');
    } else if (charactersNumbers == null) {
        alert('There are no vowels in the text');
    } else {
        alert(
            'The number of vowels in the above text is : ' + charactersNumbers.length
        );
    }
}