const router = require('express').Router();

const products = [];

const unqiueID = () => {
    return Math.floor(Math.random() * Date.now());
}

router.get('/add-product', (req, res, next) => {
    res.status(200).render('add-product', { pageTitle: 'Add Product', path: '/admin/add-products' });
})

router.post('/add-product', (req, res, next) => {
    const { productName, productPrice, productInfo } = req.body;
    const productDetails = {
        _id: unqiueID(),
        productName: productName,
        productPrice: productPrice,
        productInfo: productInfo
    }
    products.push(productDetails);
    res.redirect(301, '/admin/products');
})

exports.routes = router;
exports.products = products;
