export default async function handler(req, res) {
    const { body } = req;
    return res.send(`Hello ${body.username}, you just parsed the request body!`);
}