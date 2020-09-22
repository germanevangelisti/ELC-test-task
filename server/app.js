const express   = require("express");
const data      = require('./data');
const hostname  = 'localhost';
const port      = 3035;
const app       = express();

app.use(express.json());

app.get('/api/search/data', (req, res)=>{
    res.status(200).send(data).end()
})

app.listen(port, () => {
	console.log(`[Server running on ${hostname}:${port}]`)
});