export async function POST(request) {
    const { body } = request;

    return new Response(`Hello ${body.username}, you just parsed the request body!`);
}