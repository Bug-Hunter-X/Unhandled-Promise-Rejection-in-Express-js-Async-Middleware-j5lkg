const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling missing! 
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});