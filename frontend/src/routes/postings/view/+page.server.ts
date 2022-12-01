import { error, redirect } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async ({ request, locals, cookies, params, url }: any) => {
    const listing_id = url.searchParams.get('listing_id');
    const post = await getListing(listing_id);
    if (post) {
        console.log("MAIN FETCH OF DATA:", post)
        return {content: post, auth: locals};
    }
    
    throw error(404, 'Not found');
};

export async function getListing(listing_id: string, pagination: number = 0, pageLimit: number = 50) {
    let url = BACKEND_FLASK_HOST + 'fetchListingByListingId' + '?listing_id=' + listing_id + '&pagination=' + pagination + '&pageLimit=' + pageLimit ;
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
 