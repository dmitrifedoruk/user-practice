let crypto;
try {
    crypto = await import('node:crypto');
} catch (err) {
    console.error('crypto support is disabled!');
}

export async function POST(request) {

    const req = await request.json();

    const body = req.body;

    let data = JSON.parse(body);

    let name = "blueberry";
    let temp = "kalamazoo";

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

    temp = hash("kalamazoo");



    // let hash = bcrypt.hashSync("1234", 10);
    //
    // // var salt = "$2a$10$.VT1c4QSjrm/AR09NcvnYO";
    // const hashedPassword = "$2a$10$.VT1c4QSjrm/AR09NcvnYOITB6zgA5aokxNVUbqf6V0wbwHkcvjQK";
    //
    // const comparePassword = bcrypt.compareSync(name, hashedPassword);
    //
    // console.log(comparePassword);
    //
    // if (comparePassword) {
    //     temp = 'Login successful';
    // } else {
    //     temp = 'Invalid credentials';
    // }







    let res = await new Response(temp);

    return res;
}