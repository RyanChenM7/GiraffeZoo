import { error } from '@sveltejs/kit';

async function getListings() {
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
    title: "Test"
    }
}
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
    const post = await getListings();
    if (post) {
        return post;
    }
    
    throw error(404, 'Not found');
}