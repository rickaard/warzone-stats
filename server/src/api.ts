import fetch from "node-fetch";
import { Headers } from 'node-fetch';
// import path from 'path';

// require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config({ debug: true });


let myHeaders = new Headers();
myHeaders.append('Cookie', `XSRF-TOKEN=${process.env.XSRF_TOKEN!}`)
myHeaders.append('Cookie', `ACT_SSO_COOKIE=${process.env.ACT_SSO_COOKIE}; ACT_SSO_COOKIE_EXPIRY=1593267753947; atkn=${process.env.ATKN}; ACT_SSO_REMEMBER_ME=${process.env.ACT_SSO_REMEMBER_ME}; CRM_BLOB=eyJ2ZXIiOjEsInBsYXQiOnt9fQ; ACT_SSO_EVENT=LOGIN_FAILURE:1592065274220; XSRF-TOKEN=${process.env.XSRF_TOKEN2}; new_SiteId=cod; comid=cod; API_CSRF_TOKEN=${process.env.API_CSRF_TOKEN}`)
myHeaders.append('Cookie', `atkn=${process.env.ATKN_KEY}`);

export const cod = {

    // login: async () => {
    //     return await fetch('https://profile.callofduty.com/do_login?new_SiteId=cod', {
    //         method: 'POST',
    //         headers: myHeaders,
    //     });
    // },

    getPlayerData: async (player: string) => {

        const response = await fetch(`https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${player}/profile/type/wz`, {
            method: 'GET',
            headers: myHeaders
        });
        const result = await response.json();
        return result;
    },

    getRecentMatches: async (player: string) => {

        const response = await fetch(`https://my.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/gamer/${player}/matches/wz/start/0/end/0/details`, {
            method: 'GET',
            headers: myHeaders
        });
        const result = await response.json();
        return result;
    },

};
