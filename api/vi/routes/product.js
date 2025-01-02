const express=require('express');
const router = express.Router();
const {getAll,getByID,updateByID,addNew,deleteByID} = require('../controller/product');

router.get('/' , getAll);
router.get('/:id' , getByID);
router.post('/' , addNew);
router.put('/:id' , updateByID);
router.delete('/:id' , deleteByID);

module.exports = router;
