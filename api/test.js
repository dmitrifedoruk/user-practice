import pkg from 'bcryptjs';
const { bcrypt } = pkg;

export async function POST(request) {

    const req = await request.json();

    const body = req.body;

    let data = JSON.parse(body);

    let name = "blueberry";
    let temp = " kalamazoo";

    // var salt = "$2a$10$.VT1c4QSjrm/AR09NcvnYO";
    const hashedPassword = "$2a$10$.VT1c4QSjrm/AR09NcvnYOITB6zgA5aokxNVUbqf6V0wbwHkcvjQK";

    const comparePassword = bcrypt.compareSync(name, hashedPassword);

    console.log(comparePassword);

    if (comparePassword) {
        temp = 'Login successful';
    } else {
        temp = 'Invalid credentials';
    }







    let res = await new Response(temp);

    return res;
}