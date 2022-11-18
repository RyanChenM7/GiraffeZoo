/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }: any) {
    return {
        auth: locals
    }
}