
console.log('You can ignor single and double quotes like this:\\\'\\\' \\\"\\\" ')
alert ('Please enter your data');
let username = prompt(
    "Enter your name",
    'Name'
    );
alert(`Your name is: ${username}`);
let surname = prompt(
    "Enter your surname",
    'Surname'
    );
alert(`Your fullname is: ${username} ${surname}`);
let age = prompt(
    "How old are you?",
    'Age'
    );
alert(`Your fullname is: ${username} ${surname}, you age is :${age}`);
let admin = confirm('Are you an admin?');
alert(`Your fullname is: ${username} ${surname}, you age is :${age}.Admin status: ${admin}`);

