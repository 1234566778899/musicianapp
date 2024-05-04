const express = require('express');
const { register, update, deleteOne, getAll, getOne } = require('../controllers/Musician');
const router = express.Router();

router.post('/', register);
router.put('/:id', update);
router.delete('/:id', deleteOne);
router.get('/', getAll);
router.get('/:id', getOne);

module.exports = router;