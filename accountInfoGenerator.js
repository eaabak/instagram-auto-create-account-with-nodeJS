const _ = require('lodash');
const userName = require('random-username-generator');

// generating name
const generatingName = function () {

    const firstName = ["Alan", "Azad", "Murat", "Cevad", "Levent", "Erkin", "Cem", "Aras", "Salih", "Nur", "Mustafa", "Kerem", "Yusuf"];
    const surName = ["Abak", "Yasar", "Kilic", "Bilgic", "Demir", "Noga", "Vinos", "Shimizer", "Dag", "Kerim", "Levent", "Aram", "Akdeniz"];

    return _.sample(firstName) + " " + _.sample(surName);
};

const username = function () {
    userName.setSeperator('_');
    userName.setNames('erkinalan');
    return userName.generate();
};

module.exports = { generatingName, username };
