import { error, redirect } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async ({ request, locals, cookies }: any) => {
    if (!locals.isAuth) {
        throw redirect(307, '/login');
    }
    console.log("locals", locals)
    const post = await getListings(0, 50, locals.userId); // always get id = 1
    if (post) {
        return {content: post, auth: locals};
    }
};

export async function getListings(pagination: number = 0, pageLimit: number = 50, id: any) {
    let url = BACKEND_FLASK_HOST + 'fetchListingsById' + '?pagination=' + pagination + '&pageLimit=' + pageLimit;
    const body = {
        user: id
    }
    const header = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Auth: 'dummyauth'
    }
    const response = await fetch(url, { 
            method:'POST',
            headers: header,
            body: JSON.stringify(body),
            mode: 'cors'
        }
    )
    
    let data: any = await response.json().then(data => {
        return data.data
    });
    console.log("fetched data is: ", data)
    return data
}