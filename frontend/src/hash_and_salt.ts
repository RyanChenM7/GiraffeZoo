const bcrypt = require('bcrypt');

const SALTROUNDS = 10;

export async function hash(password: String) {
    let hashed;
    bcrypt.hash(password, SALTROUNDS, function(err: any, hash: String) {
        hashed = hash;
    });
    return hashed;
};
