import './style.css'
import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';
import axios from "axios";


document.querySelector('#app').innerHTML = `
  <div>
<fieldset>
<div><label>Username: </label><input id="username"></div>
<div><label>Email: </label><input id="email"></div>
<div><label>Password: </label><input id="password"></div>
<button id="submitButton">Submit</button>

</fieldset>

<div id="output">
<p id="loginOutput"></p>
</div>

  </div>
`

async function getUser() {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    try {
        const response = await axios.post('/api/test',{
            method: "POST",
            body: JSON.stringify({ banana : "example" }),
            headers: {'content-type':'application/json'}
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}



async function send() {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    const response = await fetch("/api/test", {
        method: "POST",
        body: JSON.stringify({ "username" : "example" }),
        headers: {'content-type':'application/json'}
    });
}

document.querySelector("#submitButton").addEventListener('click',send,false);




// document.querySelector("#submitButton").addEventListener('click',() =>
// login(document.querySelector("#password").value));


// function test(pw) {
//     var salt = bcrypt.genSaltSync(10);
//     var hash = bcrypt.hashSync(pw, salt);
//
//     document.querySelector("#saltOutput").innerHTML = salt;
//     document.querySelector("#hashOutput").innerHTML = hash;
// }

// function login(password) {
//     // var salt = "$2a$10$.VT1c4QSjrm/AR09NcvnYO";
//     var hashedPassword = "$2a$10$.VT1c4QSjrm/AR09NcvnYOITB6zgA5aokxNVUbqf6V0wbwHkcvjQK";
//
//     const comparePassword = bcrypt.compareSync(password, hashedPassword);
//
//     console.log(comparePassword);
//
//     if (comparePassword) {
//         document.querySelector("#loginOutput").innerHTML = 'Login successful';
//     } else {
//         document.querySelector("#loginOutput").innerHTML = 'Invalid credentials';
//     }
// }






