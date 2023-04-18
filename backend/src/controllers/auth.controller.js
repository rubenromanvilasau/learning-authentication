const generateToken = require('../utils/jwt');

const auth = ( req, res ) => {
    const token = generateToken({
        id: 1,
        name: 'Ruben'
    });
    res.send({
        token
    });
};

module.exports = {
    auth
};