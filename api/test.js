export async function POST(request) {
    const req = await request.json();

    const data = req.body;

    let name = data.get("banana");

    let temp = name + " kalamazoo";

    let res = await new Response(temp);

    return res;
}