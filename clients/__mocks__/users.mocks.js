import User from '../../class/User';

const validUser = new User("Fabrice", "Dab", 28, "f.dab@gmail.com");

const invalidAgeUser = new User("Jean", "Dab", 6, "j.dab@gmail.com");

const invalidMailUser = new User("Maxime", "Dab", 28, "m.dab/gmail.com");

const invalidUidUser = new User("Maxime", "Dab", 28, "m.dab/gmail.com");
invalidUidUser.uid = '7-dff9-44f7-932b-404f4e866d43';

module.exports = {
    validUser,
    invalidMailUser,
    invalidUidUser,
    invalidAgeUser
};