import './style.css'
import axios from "axios";
import crypto from "crypto";


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

// const crypto = require("crypto")

async function hash(password) {
    return new Promise((resolve, reject) => {
        // generate random 16 bytes long salt
        const salt = crypto.randomBytes(16).toString("hex")

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString('hex'))
        });
    })
}

console.log(hash("blueberry"));



// import { scrypt, randomBytes, timingSafeEqual } from "crypto";
// // import { promisify } from "util";
//
// // scrypt is callback based so with promisify we can await it
// // const scryptAsync = promisify(scrypt);
//
// export class Password {
//
//     static async hashPassword(password) {
//         const salt = randomBytes(16).toString("hex");
//         const buf = (await scryptAsync(password, salt, 64));
//         return `${buf.toString("hex")}.${salt}`;
//     }
//
//     static async comparePassword(storedPassword, suppliedPassword){
//         // split() returns array
//         const [hashedPassword, salt] = storedPassword.split(".");
//         // we need to pass buffer values to timingSafeEqual
//         const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
//         // we hash the new sign-in password
//         const suppliedPasswordBuf = (await scryptAsync(suppliedPassword, salt, 64));
//         // compare the new supplied password with the stored hashed password
//         return timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
//     }
// }
//
// Password.hashPassword("123dafdas")
//     .then((res) => Password.comparePassword(res, "123edafdas"))
//     .then((res) => console.log(res));





async function getUser(pw) {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    try {
        const response = await axios.post('/api/test',{
            method: "POST",
            body: JSON.stringify({ banana : pw }),
            headers: {'content-type':'application/json'}
        });

        document.querySelector("#output").innerHTML = response.data;

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

// document.querySelector("#submitButton").addEventListener('click',getUser,false);




document.querySelector("#submitButton").addEventListener('click',() =>
getUser(document.querySelector("#password").value),false);


// function test(pw) {
//     var salt = bcrypt.genSaltSync(10);
//     var hash = bcrypt.hashSync(pw, salt);
//
//     document.querySelector("#saltOutput").innerHTML = salt;
//     document.querySelector("#hashOutput").innerHTML = hash;
// }

// function login(password) {
//     var salt = "$2a$10$.VT1c4QSjrm/AR09NcvnYO";
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






