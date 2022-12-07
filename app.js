const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const http = require('http');

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<html><div style='text-align:center;margin-top:20%'><h1>${process.env.MY_SECRET_ENV} secret code on the main Page</h1></div></html>`);
});

const port = process.env.port || '8080';

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`API is now live on ${port}`);
});
