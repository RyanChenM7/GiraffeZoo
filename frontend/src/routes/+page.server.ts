import { error } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';

export async function getListings(pagination: number = 0, pageLimit: number = 50) {
    let url = BACKEND_FLASK_HOST + 'fetchListings' + '?pagination=' + pagination + '&pageLimit=' + pageLimit;
    const response = await fetch(url, 
        { mode: 'cors', 
            headers: { 'Access-Control-Allow-Origin':'*'}
        }
    )
    let data: any = await response.json().then(data => {
        return data.data
    });
    return data
}
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
    const post = await getListings(0, 50);
    console.log("post", post)
    if (post) {
        return {content: post};
    }
    
    throw error(404, 'Not found');
}