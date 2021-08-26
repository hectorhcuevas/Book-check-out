const express = require('express');
const app = express();
const port = process.env.port || 3001;

const knexTemp = require('knex')
const config = require('./knexfile.js').development;
const knex =  knexTemp(config);

const cors = require('cors')

let corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.status(200).send('This is the root endpoint')
})

app.get('/api/books/', (req, res) => {
  knex('books')
  .select('*')
  .then((data) => res.status(200).json(data))
  .catch((err) => console.log("ERROR: ", err))
})

app.get('/api/books/:bookId', (req, res) => {
  knex('books')
  .select('*')
  .where("id", req.params.bookId)
  .then((data) => res.status(200).json(data))
  .catch((err) => console.log("ERROR: ", err))
})


app.listen(port, () => {
  console.log("Server started listening on port: ", port);
})