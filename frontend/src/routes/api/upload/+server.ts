import { writeFileSync } from 'fs';

export async function POST({ request }: any) {
    const reader = request.body.getReader();
    reader.read().then(async function processData({done, value}: any) {
        console.log("reading...", done)
        if (done) {
            console.log("DONE!", value)
            return new Response(JSON.stringify({message: "done"}), {status: 200})
        }
        console.log("runs onces:", value)
        const data = JSON.parse((value).toString());
        console.log("data:", data)
        const file = data['image'];

        writeFileSync('static/images/22.png', file, 'base64');
    })
    return new Response(JSON.stringify({message: "processing"}), {status: 200})
}