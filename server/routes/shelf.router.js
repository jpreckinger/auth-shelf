const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(req.body, 'reqbody', req.user, 'requser')
    const sqlText = `INSERT INTO item (description, image_url, person_id)
                        VALUES ($1, $2, $3);`;
    const item = req.body.data;
    pool.query(sqlText, [item.description, item.image, req.user.id])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('I suck dongle at posting the things.')
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;