const cheerio = require("cheerio");
const fetch = require('node-fetch');

const API_URL_2 = 'https://email-fake.com/';
let email = "";

const getFakeMail = function () {

    return fetch(API_URL_2)
        .then(response => response.text())
        .then(body => {
            const $ = cheerio.load(body);
            const clearMail = $("b").attr("id", "email_ch_text").text();
            email = clearMail.replace("Adım 1Adım 2Adım 3", "");
            return email
        }).catch(error => {
            console.error(error);
        });
};

module.exports = { getFakeMail };
