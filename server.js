const express = require("express");
const port = 5000;
const app = express();
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/addUsers');
const path = require('path');
const rootDirectory = require('./utils/paths');


// seting template engine
app.set('view engine', 'ejs');
app.set('views', 'views');


// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute.routes);
app.use('/admin', require('./routes/users'));
app.use('/admin', userRoute.router);
app.use('/admin', require('./routes/shop'));
app.use(require('./routes/home'));

app.use((req, res, next) => {
    res.status(404).render('error', { pageTitle: 'Page Not Found' });
})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})




// app.use() --> Middleware;
// next() --> Allows the request to continue to the next middleware in line;