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

