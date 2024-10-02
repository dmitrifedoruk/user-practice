export async function POST(request) {
    const { body } = await request;

    let res = await new Response(body.banana);

    return res;
}