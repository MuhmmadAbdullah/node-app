const router = require('express').Router();
const productData = require('./admin');


router.get('/products', (req, res) => {
    console.log(productData.products);
    const products = productData.products;
    res.status(200).render('shop',
        {
            products : products,
            pageTitle: 'Products',
            hasProducts: products.length > 0,
            path: '/admin/products'
        });
})


module.exports = router;