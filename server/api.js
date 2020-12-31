const fetch = require("node-fetch");
const { Headers } = require('node-fetch');

// const FormData = require('form-data');
// let formdata = new FormData();
// formdata.append("username", process.env.COD_USERNAME);
// formdata.append("password", process.env.COD_PASSWORD);
// formdata.append("remember_me", "true");
// formdata.append("_csrf", 'fCDpTHxrsh8iYurC1SrSMMaanU0LhzPupGluwCmQMnQRyDiVrl39PTVCIaSxym28');

let myHeaders = new Headers();
myHeaders.append('Cookie', `XSRF-TOKEN=fCDpTHxrsh8iYurC1SrSMMaanU0LhzPupGluwCmQMnQRyDiVrl39PTVCIaSxym28`)
myHeaders.append('Cookie', `ACT_SSO_COOKIE=MzA0MjU0NjM3MzQwNTc3MDA0MDoxNTkzMjY3NzUzOTQ3OjM3Y2YwZWNkZGQ1MDA3YjJlNDkzZjQxNDQ1YWE0ZTY2; ACT_SSO_COOKIE_EXPIRY=1593267753947; atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.acZStsq7xHV9P7mjiRswU_zpmEIktFYoNARAEKR63X4xmOuk9xBX7Q.7sZqHLtdTd7lzCN9.8ZaoYd8FTJBWzZaZ2Zv5_uxG5DmpPDS5QzGWmr5jT22QDcCkulKDfHG0hUWrf7b3rILURQWAYbzQdor22YpIEtJwtMpiHyFNONi5ai4cruNmuPeboimW17ljzvf0Cxto4N3AFg8H3QuSu1uAnR-yh57q41-qU52oPshl478gda36ORX5xlyv7l_yN8qqn0ItRzLMY36a5876n9y8r1WuLyMF_Kqo2sjd5OWQRgEZBmWXByfv0t2TEkOUVOFW5Ys-5qyM0LkIFkkt_Vu8d-kKotfnh9coQVhHaH9IpooTUfIKeMgWg5c23aMJE2VZGChkFeMYqEOCjewUV0F4VrQUg33ZXRzyEDqyzW70qBT9Z4FlRjfq6SCF4DRwUnUdE3QMknQKEghZ0mnNu6wWkCbC773kWZ6iacV3zvQC2HdLgYc5c9dCfYLi96moVVbcsp0hRmYzhIUW.uT3VKift5fr2_HUi_gZIJQ; ACT_SSO_REMEMBER_ME=MzA0MjU0NjM3MzQwNTc3MDA0MDokMmEkMTAkQkFPUHl6MmQ5U1JSQ0hid21ITWJmT21CQkVDWS9Yb08xVDhDTnk3YUZOQm9hWWM2bEQ1SDI; CRM_BLOB=eyJ2ZXIiOjEsInBsYXQiOnt9fQ; ACT_SSO_EVENT=LOGIN_FAILURE:1592065274220; XSRF-TOKEN=0rGPoUGCeeSm6eNVSq76HSHiSTtoGOzMiKnWnVsN7g-V9U6ptMhbSOZhr3_bcZDI; new_SiteId=cod; comid=cod; API_CSRF_TOKEN=afee77f6-85c6-4424-bda6-757a5ad153b7`)
myHeaders.append('Cookie', `atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.4PUXu9Bwf44G993Bbuf9uOgcCTFxdPuK98Iwuk0dgVHhkFT1HrO1-g.zsqGifE4N5Q90l_x.7mxf4uHlOpY-5nYU8bTOAPUzoAL9I9-ER5VutTddufbPQU3qebeBgYZJa9ubTulKhH2SthCS_IT5MlYx2wUbwVPlC2lGPuc-M2k5x_Ou4OpPpv6ARJ5rF3bxouZJkaKMTzZ1VDsd7ZdwjERwFwYiASr5hHJFQpThpeGPpEOzQ2IsXilibMdtHr1AsyukLL2Zvm-7iCrqwFp7CW0qqBzEEmAeGFcrEtzpu8GqZNtd4BFha_-eye-RTgl577uCqB5tY5vFyS221KjFtNl1ksLKrtK0GVCesLUEKM25KQHZVAczKPlI3aFmO_lsxJc1aT-BxPVHWGJc_ZkV5yCVMWNctxBwUeaUqVwkFjGgb8OWQbtsUqqkPAdhiYoFUjDdE5X5PoI-vDeBzrucX6pfHNmVXUnPF1lW457xTvxxCjZ9mj7kqeA3p9BdLbJo5bOzHYhHOtR5BMfd.DZ9DjFKJHERAlnF96giebQ`);

const cod = {

    login: async () => {
        return await fetch('https://profile.callofduty.com/do_login?new_SiteId=cod', {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        }); 
    },

    getPlayerData: async (player) => {
        const playerName = player.replace('#', '%23')

        return await fetch(`https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${playerName}/profile/type/wz`, {
            method: 'GET',
            headers: myHeaders
        }).then(res => res.json())
    },

    getRecentMatches: async (player) => {
        const playerName = player.replace('#', '%23')

        return await fetch(`https://my.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/gamer/${playerName}/matches/wz/start/0/end/0/details`, {
            method: 'GET',
            headers: myHeaders
        }).then(res => res.json());
    },

    getFriendsStats: async (player) => {
        const playerName = player.replace('#', '%23')

        return await fetch(`https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${playerName}/profile/friends/type/mp`, {
            method: 'GET',
            headers: myHeaders
        }).then(res => res.json())
    }

};

module.exports = cod;