const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my API!' }); 
});

app.listen(3000,() => {
  console.log("listening on port 3000") 
});
