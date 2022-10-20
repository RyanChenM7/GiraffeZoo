import { error } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';
 
/** @type {import('./$types').LayoutLoad} */
export function load() {
    // do nothing for now
}

/** @type {import('./$types').Actions} */
export const actions = {
    createListing: async ({ cookies, request}: any) => {
        const data = await request.formData();
        const id = data.get('id');
        const user_id = data.get('user_id');
        const address = data.get('address');
        const city = data.get('city');
        const province = data.get('province');
        const rooms = data.get('rooms');
        const bathrooms = data.get('bathrooms');
        const feet = data.get('feet');
        const heating = data.get('heating');
        const water = data.get('water');
        const hydro = data.get('hydro');
        const type = data.get('type');
        const parking = data.get('parking');
        const price = data.get('price');
        const months = data.get('months');
        const comment = data.get('comment');
        let url = BACKEND_FLASK_HOST + 'createListing';
        const body = {
            user_id: user_id,
            address: address,
            city: city,
            province: province,
            rooms: rooms,
            bathrooms: bathrooms,
            feet: feet,
            heating: heating,
            water: water,
            hydro: hydro,
            type: type,
            parking: parking,
            price: price,
            months: months,
            comment: comment
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