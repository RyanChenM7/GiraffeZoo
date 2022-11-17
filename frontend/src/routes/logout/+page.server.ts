import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({cookies}) => {
    cookies.set('session', '', {
        path: '/',
        expires: new Date(0),
    })
    // we only use this endpoint for the api
    // and don't need to see the page
    throw redirect(302, '/login')
}