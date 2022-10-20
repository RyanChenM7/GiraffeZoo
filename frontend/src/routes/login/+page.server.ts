import { error } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';
 
/** @type {import('./$types').LayoutLoad} */
export function load() {
    // do nothing for now
}

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request}: any) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        let url = BACKEND_FLASK_HOST + 'login';
        const body = {
            email : email,
            password : password
        }
    },
    register: async ( {cookies, request}: any) => {
        const data = await request.formData();
        
        const password = data.get('password');
        const phone = data.get('phone');
        const email = data.get('email');
        const username = data.get('username');
        const fname = data.get('fname');
        const lname = data.get('lname');
        let url = BACKEND_FLASK_HOST + 'createAccount';
        // "user": w,
        //     "pass": x,
        //     "first": a,
        //     "last": b,
        //     "phone": y,
        //     "email": z,
        const body: any = {
            email: email,
            pass: password,
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
        console.log("body", body)
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