const express = require('express');
const productController = require('../controllers/productController');
const authController = require('./../controllers/authController');

const reviewRouter = require('./../routes/reviewRoutes');
const router = express.Router();

// router.param('id', tourController.checkID);
router.use('/:productId/reviews', reviewRouter);

router.route('/product-stats').get(productController.getProductStats);
router
  .route('/top-3-cheap')
  .get(productController.aliasTopProducts, productController.getAllProduct);

router
  .route('/')
  .get(productController.getAllProduct)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    productController.createProduct
  ); // checkBody is middleware for check condition

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    productController.deleteProduct
  );

module.exports = router;
