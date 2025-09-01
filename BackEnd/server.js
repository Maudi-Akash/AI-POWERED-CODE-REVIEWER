require('dotenv').config()
const app = require('./src/app');

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
})

app.listen(3000, () => {
    console.log('server is running on port at 3000');
})