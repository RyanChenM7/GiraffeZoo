import { BACKEND_FLASK_HOST } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export const load: PageServerLoad = async ({ params, locals }: any) => {
    if (locals.isAuth) {
        throw redirect(307, '/');
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    register: async ( {cookies, request}: any) => {
        const data = await request.formData();
        
        const password = data.get('password');
        const phone = data.get('phone');
        const email = data.get('email');
        const username = data.get('username');
        const fname = data.get('fname');
        const lname = data.get('lname');
        let url = BACKEND_FLASK_HOST + 'createAccount';
        
        const body: any = {
            user: username,
            pass: password,
            first: fname,
            last: lname,
            phone: phone,
            email: email
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
            if (data.message === 'Email already used!') {
                throw redirect(307, '/register');
            }
        });
        throw redirect(307, '/login');
    }
};