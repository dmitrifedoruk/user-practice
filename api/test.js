export async function POST(request) {
    const { body } = await request.json();

    const data = body.json();

    let res = await new Response(data);

    return res;
}