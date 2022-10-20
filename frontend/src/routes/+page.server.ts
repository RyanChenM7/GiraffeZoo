import { error } from '@sveltejs/kit';
import { BACKEND_HOST } from '$env/static/private';

export async function getListings(pagination: number = 0, pageLimit: number = 50) {
    let url = BACKEND_HOST + 'fetchListings' + '?pagination=' + pagination + '&pageLimit=' + pageLimit;
    const response = await fetch(url, 
        { mode: 'cors', 
            headers: { 'Access-Control-Allow-Origin':'*'}
        }
    )
    const data: any = await response.json().then(data => {
        console.log("data", data)
    });
    return data.data
}
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
    const post = await getListings(0, 50);
    if (post) {
        return post;
    }
    
    throw error(404, 'Not found');
}