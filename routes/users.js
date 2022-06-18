const router = require('express').Router();
const userData = require('./addUsers');


router.get('/users', (req, res, next) => {
    const user = userData.users;
    res.status(200).render('users', 
    { 
        pageTitle: 'Users',
        userData: user ,
        hasUsers: user.length > 0,
        path: '/admin/users'
    });
})


module.exports = router;
