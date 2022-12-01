import { error, redirect } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async ({ request, locals, cookies }: any) => {
    if (!locals.isAuth) {
        throw redirect(307, '/login');
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    deleteListing: async ({ cookies, request}: any) => {
        const data = await request.formData();
        const id = data.get('id');
        let url = BACKEND_FLASK_HOST + 'deleteListing';
        const body = {
            id: id
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
        let responseData: any = await response.json().then(data => {
            console.log("data", data)
        });
        return {"message":"done"}
    }
};