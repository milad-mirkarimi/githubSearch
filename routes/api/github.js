const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

// GET api/github/users/:username
// Get user repos from Github
// @access public
router.get('/users/:username', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/search/users?q=${req.params.username}&per_page=20
            &client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };

        request(options, (error, response, body) => {
            if (error) console.error(error)

            if (response.statusCode !== 200) {
                return res.status(404).json({ msg: 'No Github profile found!' });
            }

            res.json(JSON.parse(body));
        });
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;