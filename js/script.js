function add7(num) {
    console.log(num + 7);
}

function multiply(num_one, num_two) {
    console.log(num_one * num_two);
}

function capitalize(input_str) {
    let new_string = input_str[0].toUpperCase();
    new_string += input_str.substring(1, (input_str.length - 1)).toLowerCase();
    console.log(new_string);    
}

function lastLetter(input_str) {
    console.log(input_str[(input_str.length - 1)]);
}

// INVOKE FUNCTIONS
add7(7); // Should be 17
multiply(3, 2); // Should be 6

////
// All results should be 'Abcd'
///
capitalize('ABCD');
capitalize('Abcd');
capitalize('aBcD');

lastLetter('abcd'); // Should be 'd'


