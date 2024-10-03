export async function POST(request) {
    const body = await request.body.json();

    const data = JSON.parse(req);

    let name = data.body;

    // let temp = name + " kalamazoo";

    let res = await new Response(name);

    return res;
}