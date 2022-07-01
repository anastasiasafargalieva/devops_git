const express = require('express');
const app = express();


const host = 'localhost';
const port = 8000;

app.get('/', (req, res) => {
  const getStringNow = () => {

    var randomstring = require("randomstring");
    const randomString = randomstring.generate(7);
    const now = new Date;
  
    console.log(now, randomString)
  
    setTimeout(getStringNow, 5000)
  }
  res.send(getStringNow());
})


//getStringNow();

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port} !`);
});
