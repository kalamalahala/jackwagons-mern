const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get( (req, res) => {
    User.find()
        .then(user => res.json("{'yo wassup'}"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;