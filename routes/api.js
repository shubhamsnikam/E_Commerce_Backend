const express = require ('express');

const product_controller = require('../product_controller/product_controller');
const userController = require('../product_controller/userController');
const authorise = require ('../middleware/authorise');

const router =express.Router();

// http://localhost:5005/api/getAllProducts
router.get('/getAllProducts',product_controller.getAllProducts);


// http://localhost:5005/api/addProduct
router.post('/addProduct',product_controller.addProduct);


router.get('/getWithQuery',product_controller.getWithQuery)
// http://localhost:5005/api/getWithQuery


router.delete('/product/:id',product_controller.deleteProduct);
// http://localhost:5005/api/product/


router.put('/product:/id',product_controller.updateProducts);
// http://localhost:5005/api/product/


router.post('/register',userController.addUser);
// http://localhost:5005/api/register


router.post('/login',userController.getUser);
// http://localhost:5005/api/login


router.get('/getProductsWithAuth',authorise ,product_controller.getAllProducts);

module.exports=router;