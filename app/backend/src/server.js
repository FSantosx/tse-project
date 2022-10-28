

const express       = require('express');
const app           = express();
const PORT          = 3000 || process.env.PORT;

app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));

app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

app.use('/api', require('./routes/router.js'));

// Handle not valid route
app.use('*', (req, res) => {
    res
    .status(404)
    .json( {status: false, message: 'Endpoint Not Found'} );
})

app.listen(
    PORT, () => console.log(`App listen on ${PORT}`)
);

