const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.get('/', (req, res) =>{
  path.join(__dirname, 'build', 'index.html');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})