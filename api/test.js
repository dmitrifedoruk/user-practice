export async function POST(request) {
    const { body } = request;

    let res = await new Response(`Hello ${JSON.stringify(body)}, you just parsed the request body!`);

    return res;
}