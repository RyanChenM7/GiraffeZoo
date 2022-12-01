const bcrypt = require('bcrypt');

const SALTROUNDS = 10;

export async function hash(password: any) {
    let hashed;
    bcrypt.hash(password, SALTROUNDS, function(err: any, hash: any) {
        hashed = hash;
    });
    return hashed;
};
