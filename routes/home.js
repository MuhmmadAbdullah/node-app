const router = require('express').Router();



router.get('/', (req, res) => {
    res.status(200).render('index', { pageTitle: 'Home', path: '/' });
})

module.exports = router;