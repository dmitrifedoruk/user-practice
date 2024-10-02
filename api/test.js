export async function POST(request) {
    const { body } = await request.body;

    let res = await new Response(body);

    return res;
}