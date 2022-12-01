import { BACKEND_FLASK_HOST } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const bcrypt = require('bcrypt');

const SALTROUNDS = 10;

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
        
        let hashed;
        bcrypt.hash(password, SALTROUNDS, function(err: any, hash: any) {
            hashed = hash;
        });
        
        const body: any = {
            email: email,
            pass: hashed,
            first: fname,
            last: lname,
            phone: phone,
            user: username
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
        throw redirect(307, '/');
    }
};