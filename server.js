const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors())

app.get('/', async (req, res) => {

 const {data} = await axios('https://jsonplaceholder.typicode.com/users')  
 console.log(data)

  return res.json(data)
})

app.listen('4567')