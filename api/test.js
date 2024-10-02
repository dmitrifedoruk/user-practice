export async function POST(request) {
    const { req } = await request;

    let res = await new Response(req.body);

    return res;
}