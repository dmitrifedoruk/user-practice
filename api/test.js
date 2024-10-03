export async function POST(request) {
    const req = await request.json();

    const body = req.body;

    let data = JSON.parse(body);

    let name = data.banana;

    let temp = name + " kalamazoo";

    let res = await new Response(temp);

    return res;
}