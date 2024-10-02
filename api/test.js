export async function POST(request) {
    const { body } = await request;

    let res = await new Response(`Hello ${body.name}, you just parsed the request body!`);

    return res;
}