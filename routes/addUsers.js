const router = require('express').Router();


const users = [];


const unqiueID = () => {
    return Math.floor(Math.random() * Date.now());
}

router.get('/add-users', (req, res, next) => {
    res.status(200).render('add-users',
        {
            pageTitle: 'Add User',
            path: '/admin/add-users'
        });
})

router.post('/add-users', (req, res, next) => {
    const { userName, userEmail, userNumber, userAddress } = req.body;
    const userInfo = {
        _id: unqiueID(),
        userName: userName,
        userEmail: userEmail,
        userNumber: userNumber,
        userAddress: userAddress
    }
    users.push(userInfo);
    res.redirect(301, '/admin/users');
})


exports.router = router;
exports.users = users;