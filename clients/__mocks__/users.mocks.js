const validUser = {
    firstName: "Fabrice",
    lastName: "Dab",
    email: "f.dab@gmail.com",
    age: 28,
    uid: "7663ad8f-dff9-44f7-932b-404f4e866d43"
};

const invalidMailUser = {
    firstName: "Fabrice",
    lastName: "Dab",
    email: "f.dab/gmail.com",
    age: 28,
    uid: "7663ad8f-dff9-44f7-932b-404f4e866d43"
};

const invalidUidUser = {
    firstName: "Fabrice",
    lastName: "Dab",
    email: "f.dab@gmail.com",
    age: 28,
    uid: "7-dff9-44f7-932b-404f4e866d43"
};

const invalidAgeUser = {
    firstName: "Fabrice",
    lastName: "Dab",
    email: "f.dab@gmail.com",
    age: 4,
    uid: "7663ad8f-dff9-44f7-932b-404f4e866d43"
};

module.exports = {
    validUser,
    invalidMailUser,
    invalidUidUser,
    invalidAgeUser
};