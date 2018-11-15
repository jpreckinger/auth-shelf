const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
// router.get('/', (req, res) => {
//     res.sendStatus(200); // For testing only, can be removed
// });


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

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
router.get('/', (req, res) => {
    console.log('in count GET router', req);
    const sqlText = `SELECT person.username, COUNT(item.person_id) FROM person
    JOIN item ON item.person_id = person.id
    GROUP BY person.username;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('got stuff back from the db', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error in getting db ${sqlText}`, error);
            res.sendStatus(500);
        });
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;