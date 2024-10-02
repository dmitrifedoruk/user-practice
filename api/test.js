export async function POST(request) {
    const { body } = request;

    return new Response(`Hello ${body}, you just parsed the request body!`);
}