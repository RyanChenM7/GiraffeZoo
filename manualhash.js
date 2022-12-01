const bcrypt = require('bcrypt');

const SALTROUNDS = 10;

const password = "password3"

let hashed;
bcrypt.hash(password, SALTROUNDS, function(err, hash) {
    console.log(hash);
});