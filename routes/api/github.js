const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

// GET api/github/users/:username/:sort
// Get user from Github
// @access public
router.get('/users/:username/:sort', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/search/users?q=${req.params.username}&sort=${req.params.sort}&per_page=10
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

// GET api/github/repos/:username
// Get user repos from Github
// @access public
router.get('/repos/:username', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=10
            &sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };

        request(options, (error, response, body) => {
            if (error) console.error(error)

            if (response.statusCode !== 200) {
                return res.status(404).json({ msg: 'No Github repo found!' });
            }

            res.json(JSON.parse(body));
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})
module.exports = router;