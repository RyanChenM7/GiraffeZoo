import { error } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';

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
    return data
}
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
    const post = await getListings(0, 50, 1); // always get id = 1
    if (post) {
        return {content: post};
    }
    
    throw error(404, 'Not found');
}