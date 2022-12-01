import { error, redirect } from '@sveltejs/kit';
import { BACKEND_FLASK_HOST } from '$env/static/private';
import type { PageServerLoad } from './$types';
import {createTransport} from 'nodemailer';
 
export const load: PageServerLoad = async ({ request, locals, cookies }: any) => {
    if (!locals.isAuth) {
        throw redirect(307, '/login');
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    sendEmail: async ({ cookies, request, locals}: any) => {
        const data = await request.formData();
        const email = data.get('email');
        const body = data.get('body');
        const subject = data.get('subject');

        let transporter = createTransport({
            service: "gmail",
            auth: {
                user: "contactwaterloorentals@gmail.com",
                pass: "coixeqvexaavaoug",
            },
        });

        let info = await transporter.sendMail({
            from: "contactwaterloorentals@gmail.com", // sender address
            to: "contactwaterloorentals@gmail.com" , // list of receivers
            subject: "Contact Us Form Request From " + email + " : " + subject, // Subject line
            text: "A request was sent by " + email + "\n---------------------------------------------\n" + body
        });
        return {"message":"done"}
    }
};




