export async function POST(request) {
    const req = await request.json();

    const data = JSON.parse(req);

    let name = data.body;

    // let temp = name + " kalamazoo";

    let res = await new Response(JSON.stringify(name));

    return res;
}