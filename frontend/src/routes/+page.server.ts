import { error } from '@sveltejs/kit';
import { BACKEND_HOST } from '$env/static/private';

export async function getListings(pagination: number = 0, pageLimit: number = 50) {
    let url = BACKEND_HOST + 'fetchListings' + '?pagination=' + pagination + '&pageLimit=' + pageLimit;
    console.log("url is ", url)
    // const response = await fetch(url, 
    //     { mode: 'cors', 
    //         headers: { 'Access-Control-Allow-Origin':'*'}
    //     }
    // )
    // const data = await response.json().then(data => {
    //     console.log("data", data)
    // });
    return { content:[
        {
            poster:  "kebab man",
            monthlyRent:  199,
            contractLength:  "4 months",
            location:  "your moms house",
            customComment:  "this is a test comment"
        },
        {
            poster:  "kebab man2",
            monthlyRent:  299,
            contractLength:  "8 months",
            location:  "your moms house",
            customComment:  "this is a test comment"
        },
        {
            poster:  "kebab man3",
            monthlyRent:  499,
            contractLength:  "3 months",
            location:  "your moms house",
            customComment:  "this is a test comment"
        },
        {
            poster:  "kebab man4",
            monthlyRent:  699,
            contractLength:  "4 months",
            location:  "your moms house",
            customComment:  "this is a test comment"
        }
    ],
    title: "Listings"
    }
}
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
    const post = await getListings(0, 50);
    if (post) {
        return post;
    }
    
    throw error(404, 'Not found');
}