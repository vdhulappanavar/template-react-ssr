require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const csp = require('helmet-csp')
/*
app.use(csp({
    directives: {
    defaultSrc: ["'self'", 'data:font'],
    fontSrc: ["'self'", 'data:font']
    }
}))
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, './build')))

// global error handler

app.get('*', function(req, res) {

    res.sendFile(path.resolve(__dirname, './build/index.html'));

});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});