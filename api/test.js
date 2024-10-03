export async function POST(request) {
    const { body } = await request.json();

    let name = body.banana;

    let temp = name + " kalamazoo";

    let res = await new Response(temp);

    return res;
}