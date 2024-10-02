export async function POST(request) {
    const { body } = await request.json();

    let res = await new Response(body);

    return res;
}