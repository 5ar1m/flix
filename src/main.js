const app = require('./app');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server started at port ${port}...`);
});